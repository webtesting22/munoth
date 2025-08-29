import React, { useState } from 'react';
import {
  Card,
  Form,
  Select,
  Input,
  DatePicker,
  Upload,
  Button,
  message,
  Typography,
  Space,
  Divider,
  Row,
  Col,
  Table,
  Modal,
  Popconfirm,
  Tag,
  Tooltip,
  Badge
} from 'antd';
import {
  UploadOutlined,
  FileTextOutlined,
  CalendarOutlined,
  FolderOpenOutlined,
  SaveOutlined,
  ReloadOutlined,
  EditOutlined,
  DeleteOutlined,
  EyeOutlined,
  PlusOutlined,
  FileOutlined,
  DownloadOutlined
} from '@ant-design/icons';
import './DocumentUploadPanel.css';

const { Title, Text } = Typography;
const { Option } = Select;

const DocumentUploadPanel = () => {
  const [form] = Form.useForm();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);
  const [fileList, setFileList] = useState([]);

  // CRUD state management
  const [documents, setDocuments] = useState([]);
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const [editingDocument, setEditingDocument] = useState(null);
  const [editForm] = Form.useForm();
  const [editFileList, setEditFileList] = useState([]);
  const [activeTab, setActiveTab] = useState('upload'); // 'upload' or 'manage'

  // S3 Upload states
  const [isUploading, setIsUploading] = useState(false);
  const [uploadError, setUploadError] = useState('');
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [uploadedFileUrl, setUploadedFileUrl] = useState('');
  const [uploadResponse, setUploadResponse] = useState(null);
  const [s3Fields, setS3Fields] = useState(null);

  // API Configuration
  const API_BASE_URL = 'http://localhost:4040/api';

  // Document categories based on existing Financial and Compliance components
  const documentCategories = {
    Financial: {
      'Annual Return': {
        description: 'Annual return documents and MGT-7 forms',
        fields: ['Document Name', 'Document File', 'Document Date']
      },
      'Quarterly Reports': {
        subcategories: {
          'Shareholding Pattern': {
            description: 'Shareholding pattern reports for quarterly periods',
            fields: ['Document Name', 'Document File', 'Document Date', 'Quarter']
          },
          'Financial Results': {
            description: 'Unaudited quarterly financial results',
            fields: ['Document Name', 'Document File', 'Document Date', 'Quarter', 'Year']
          }
        }
      },
      'Annual Results': {
        subcategories: {
          'Audited Financial Results': {
            description: 'Audited financial results for annual periods',
            fields: ['Document Name', 'Document File', 'Document Date', 'Financial Year']
          },
          'Annual Reports': {
            description: 'Complete annual reports',
            fields: ['Document Name', 'Document File', 'Document Date', 'Financial Year']
          }
        }
      },
      'Announcements': {
        subcategories: {
          '2024': {
            description: 'Announcements for year 2024',
            fields: ['Document Name', 'Document File', 'Document Date']
          },
          '2023': {
            description: 'Announcements for year 2023',
            fields: ['Document Name', 'Document File', 'Document Date']
          },
          '2022': {
            description: 'Announcements for year 2022',
            fields: ['Document Name', 'Document File', 'Document Date']
          }
        }
      },
      'Documents and Others': {
        subcategories: {
          'Policies': {
            description: 'Company policies and governance documents',
            fields: ['Document Name', 'Document File', 'Document Date', 'Policy Type']
          }
        }
      }
    },
    Compliance: {
      'Investor Charters': {
        description: 'Investor charter documents for different categories',
        fields: ['Document Name', 'Document File', 'Document Date', 'Charter Type']
      },
      'Investor Complaints Data': {
        description: 'Data related to investor complaints',
        fields: ['Document Name', 'Document File', 'Document Date', 'Report Period']
      },
      'Documents': {
        description: 'General compliance documents, guides, and disclosures',
        fields: ['Document Name', 'Document File', 'Document Date', 'Document Type']
      }
    }
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setSelectedSubCategory(null);
    form.resetFields(['subCategory', 'documentName', 'documentDate', 'additionalField']);
    setFileList([]);
  };

  const handleSubCategoryChange = (subCategory) => {
    setSelectedSubCategory(subCategory);
    form.resetFields(['documentName', 'documentDate', 'additionalField']);
    setFileList([]);
  };

  const handleFileChange = async ({ fileList: newFileList }) => {
    setFileList(newFileList);

    // Reset upload states when file changes
    setUploadError('');
    setUploadSuccess(false);
    setUploadedFileUrl('');
    setUploadResponse(null);
    setS3Fields(null);

    // Auto-upload when file is selected
    if (newFileList.length > 0 && newFileList[0].originFileObj) {
      const file = newFileList[0].originFileObj;
      console.log('🔄 Auto-uploading file:', file.name);

      try {
        setIsUploading(true);
        const uploadResult = await uploadDocumentToS3(file);
        console.log('✅ Auto-upload successful:', uploadResult);
        setUploadedFileUrl(uploadResult.finalUrl);
        setUploadResponse(uploadResult.response);
        setS3Fields(uploadResult.s3Fields);
        setUploadSuccess(true);
        message.success('File uploaded successfully!');

        // Clear any form validation errors for the file field
        form.setFields([
          {
            name: 'documentFile',
            errors: [],
          },
        ]);
      } catch (error) {
        console.error('❌ Auto-upload failed:', error);
        setUploadError(`Upload failed: ${error.message}`);
        message.error('Failed to upload file');
      } finally {
        setIsUploading(false);
      }
    } else if (newFileList.length === 0) {
      // File was removed, clear upload states
      setUploadedFileUrl('');
      setUploadResponse(null);
      setS3Fields(null);
      setUploadSuccess(false);
    }
  };

  // S3 Upload Function
  const uploadDocumentToS3 = async (file) => {
    try {
      setIsUploading(true);
      setUploadError('');
      setUploadSuccess(false);

      const filename = file.name;
      const mime = file.type.split("/")[1];

      const requestBody = {
        fileName: filename,
        mime: mime,
      };

      console.log('🚀 Starting S3 Upload Process');
      console.log('📁 File Details:', { filename, mime, size: file.size });
      console.log('📤 Request Body:', requestBody);

      // Get upload policy from API
      console.log('🌐 Calling uploadPolicy API...');
      const response = await fetch(`${API_BASE_URL}/chats/uploadPolicy`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Token ${window.localStorage.getItem("token")}`,
        },
        body: JSON.stringify(requestBody),
      });

      console.log('📡 API Response Status:', response.status);
      console.log('📡 API Response Headers:', Object.fromEntries(response.headers.entries()));

      if (!response.ok) {
        const errorText = await response.text();
        console.error('❌ API Error Response:', errorText);
        throw new Error(
          `Upload policy API failed: ${response.status} - ${errorText}`
        );
      }

      const data = await response.json();
      console.log('✅ API Response Data:', data);

      // Validate response structure
      if (!data.data || !data.data.fields || !data.data.url) {
        console.error('❌ Invalid API Response Structure:', data);
        throw new Error("Invalid upload policy response structure");
      }

      console.log('📋 S3 Upload Fields:', data.data.fields);
      console.log('🔗 S3 Upload URL:', data.data.url);
      console.log('📂 File Path:', data.filePath);

      // Create FormData for S3 upload
      const formData = new FormData();
      Object.entries(data.data.fields).forEach(([key, value]) => {
        formData.append(key, value);
        console.log(`📝 Added field: ${key} = ${value}`);
      });
      formData.append("file", file);
      console.log('📎 Added file to FormData');

      // Construct final URL
      const finalUrl = `${data.data.url}/${data.filePath}`;
      console.log('🎯 Final File URL:', finalUrl);

      // Upload to S3
      console.log('☁️ Uploading to S3...');
      const uploadResponse = await fetch(data.data.url, {
        method: "POST",
        body: formData,
      });

      console.log('☁️ S3 Upload Response Status:', uploadResponse.status);
      console.log('☁️ S3 Upload Response Headers:', Object.fromEntries(uploadResponse.headers.entries()));

      if (uploadResponse.ok) {
        console.log('✅ S3 Upload Successful!');

        // Return all the data for state management
        return {
          finalUrl: finalUrl,
          response: data,
          s3Fields: data.data.fields,
          filePath: data.filePath,
          s3Url: data.data.url
        };
      } else {
        const errorText = await uploadResponse.text();
        console.error('❌ S3 Upload Error:', errorText);
        throw new Error(
          `S3 upload failed: ${uploadResponse.status} - ${errorText}`
        );
      }
    } catch (error) {
      console.error('💥 Upload Error:', error);
      setUploadError(`Failed to upload document: ${error.message}`);
      throw error;
    } finally {
      setIsUploading(false);
    }
  };

  const getCurrentCategoryInfo = () => {
    if (!selectedCategory) return null;

    const categoryData = documentCategories[selectedCategory];
    if (!selectedSubCategory) {
      return categoryData[Object.keys(categoryData)[0]];
    }

    const mainCategory = Object.keys(categoryData).find(key =>
      categoryData[key].subcategories && categoryData[key].subcategories[selectedSubCategory]
    );

    if (mainCategory) {
      return categoryData[mainCategory].subcategories[selectedSubCategory];
    }

    return categoryData[selectedSubCategory];
  };

  const getSubCategories = () => {
    if (!selectedCategory) return [];

    const categoryData = documentCategories[selectedCategory];
    const subCategories = [];

    Object.keys(categoryData).forEach(key => {
      if (categoryData[key].subcategories) {
        Object.keys(categoryData[key].subcategories).forEach(subKey => {
          subCategories.push({
            value: subKey,
            label: subKey,
            parent: key
          });
        });
      } else {
        subCategories.push({
          value: key,
          label: key,
          parent: null
        });
      }
    });

    return subCategories;
  };

  const handleSubmit = async (values) => {
    console.log('🚀 ===== DOCUMENT SAVE PROCESS STARTED =====');

    try {
      // Enhanced validation
      if (fileList.length === 0) {
        message.error('Please select a document file');
        return;
      }

      if (!uploadedFileUrl) {
        message.error('Please wait for file upload to complete');
        return;
      }

      if (!selectedCategory || !selectedSubCategory) {
        message.error('Please select both category and sub-category');
        return;
      }

      if (!values.documentName) {
        message.error('Please enter document name');
        return;
      }

      if (!values.documentDate) {
        message.error('Please select document date');
        return;
      }

      console.log('✅ ===== VALIDATION PASSED =====');

      // Create request body for backend API
      const requestBody = {
        category: selectedCategory,
        subCategory: selectedSubCategory,
        documentName: values.documentName,
        documentDate: values.documentDate?.format('YYYY-MM-DD'),
        fileUrl: uploadedFileUrl,
        uploadedBy: "user123" // You can get this from user context/auth
      };

      console.log('📋 ===== REQUEST BODY FOR BACKEND API =====');
      console.log('📋 Request Body:', requestBody);

      // Send to backend API
      console.log('🌐 ===== SENDING TO BACKEND API =====');
      console.log('🌐 API URL:', 'http://localhost:4040/api/munoth/uploadDocument');

      const response = await fetch('http://localhost:4040/api/munoth/uploadDocument', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Token ${localStorage.getItem('token') || ''}`
        },
        body: JSON.stringify(requestBody)
      });

      console.log('📡 ===== API RESPONSE =====');
      console.log('📡 Response Status:', response.status);
      console.log('📡 Response Headers:', Object.fromEntries(response.headers.entries()));

      if (!response.ok) {
        const errorText = await response.text();
        console.error('❌ API Error Response:', errorText);
        throw new Error(`Backend API failed: ${response.status} - ${errorText}`);
      }

      const apiResponse = await response.json();
      console.log('✅ API Response Data:', apiResponse);

      // Create final document object for local state
      const finalDocument = {
        id: Date.now(),
        category: selectedCategory,
        subCategory: selectedSubCategory,
        documentName: values.documentName,
        documentDate: values.documentDate?.format('YYYY-MM-DD'),
        additionalField: values.additionalField,
        fileName: fileList[0]?.name,
        fileSize: fileList[0]?.size,
        fileUrl: uploadedFileUrl,
        uploadDate: new Date().toISOString().split('T')[0],
        status: 'Active',
        uploadedBy: "user123",
        apiResponse: apiResponse
      };

      // Add to documents list
      setDocuments(prev => [finalDocument, ...prev]);

      console.log('🎉 ===== DOCUMENT SAVED SUCCESSFULLY =====');
      message.success('Document saved successfully!');

      // Reset form
      form.resetFields();
      setSelectedCategory(null);
      setSelectedSubCategory(null);
      setFileList([]);
      setUploadError('');
      setUploadSuccess(false);
      setUploadedFileUrl('');
      setUploadResponse(null);
      setS3Fields(null);

      console.log('🔄 ===== FORM RESET COMPLETED =====');

    } catch (error) {
      console.error('💥 ===== ERROR OCCURRED =====');
      console.error('💥 Error:', error);
      message.error(`Failed to save document: ${error.message}`);
    }

    console.log('🏁 ===== DOCUMENT SAVE PROCESS COMPLETED =====');
  };

  const resetForm = () => {
    form.resetFields();
    setSelectedCategory(null);
    setSelectedSubCategory(null);
    setFileList([]);
    setUploadError('');
    setUploadSuccess(false);
    setUploadedFileUrl('');
    setUploadResponse(null);
    setS3Fields(null);
    message.info('Form reset successfully');
  };

  // CRUD Operations
  const handleEdit = (record) => {
    setEditingDocument(record);
    editForm.setFieldsValue({
      category: record.category,
      subCategory: record.subCategory,
      documentName: record.documentName,
      documentDate: record.documentDate ? moment(record.documentDate) : null,
      additionalField: record.additionalField
    });
    setEditFileList([{
      uid: '-1',
      name: record.fileName,
      status: 'done',
      url: '#'
    }]);
    setIsEditModalVisible(true);
  };

  const handleEditSubmit = async (values) => {
    try {
      const updatedDocument = {
        ...editingDocument,
        category: values.category,
        subCategory: values.subCategory,
        documentName: values.documentName,
        documentDate: values.documentDate?.format('YYYY-MM-DD'),
        additionalField: values.additionalField,
        fileName: editFileList[0]?.name || editingDocument.fileName,
        fileSize: editFileList[0]?.size || editingDocument.fileSize,
        lastModified: new Date().toISOString().split('T')[0]
      };

      setDocuments(prev =>
        prev.map(doc => doc.id === editingDocument.id ? updatedDocument : doc)
      );

      message.success('Document updated successfully!');
      setIsEditModalVisible(false);
      setEditingDocument(null);
      editForm.resetFields();
      setEditFileList([]);

    } catch (error) {
      console.error('Update error:', error);
      message.error('Failed to update document');
    }
  };

  const handleDelete = (record) => {
    setDocuments(prev => prev.filter(doc => doc.id !== record.id));
    message.success('Document deleted successfully!');
  };

  const handleView = (record) => {
    Modal.info({
      title: 'Document Details',
      width: 600,
      content: (
        <div>
          <p><strong>Category:</strong> {record.category}</p>
          <p><strong>Sub Category:</strong> {record.subCategory}</p>
          <p><strong>Document Name:</strong> {record.documentName}</p>
          <p><strong>Document Date:</strong> {record.documentDate}</p>
          {record.additionalField && <p><strong>Additional Info:</strong> {record.additionalField}</p>}
          <p><strong>File Name:</strong> {record.fileName}</p>
          <p><strong>File Size:</strong> {formatFileSize(record.fileSize)}</p>
          <p><strong>Upload Date:</strong> {record.uploadDate}</p>
          <p><strong>Status:</strong> <Tag color="green">{record.status}</Tag></p>
          {record.fileUrl && (
            <p>
              <strong>File URL:</strong>
              <a href={record.fileUrl} target="_blank" rel="noopener noreferrer" style={{ marginLeft: 8 }}>
                View File
              </a>
            </p>
          )}
        </div>
      )
    });
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const currentInfo = getCurrentCategoryInfo();

  // Table columns
  const columns = [
    {
      title: 'Document Name',
      dataIndex: 'documentName',
      key: 'documentName',
      width: 200,
      ellipsis: true,
      render: (text, record) => (
        <div>
          <div style={{ fontWeight: 500 }}>{text}</div>
          <div style={{ fontSize: '12px', color: '#666' }}>
            <FileOutlined /> {record.fileName}
          </div>
        </div>
      )
    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
      width: 100,
      render: (category) => (
        <Tag color={category === 'Financial' ? 'blue' : 'green'}>
          {category}
        </Tag>
      )
    },
    {
      title: 'Sub Category',
      dataIndex: 'subCategory',
      key: 'subCategory',
      width: 150,
      ellipsis: true
    },
    {
      title: 'Document Date',
      dataIndex: 'documentDate',
      key: 'documentDate',
      width: 120,
      sorter: (a, b) => new Date(a.documentDate) - new Date(b.documentDate)
    },
    {
      title: 'File Size',
      dataIndex: 'fileSize',
      key: 'fileSize',
      width: 100,
      render: (size) => formatFileSize(size)
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      width: 80,
      render: (status) => (
        <Badge
          status={status === 'Active' ? 'success' : 'default'}
          text={status}
        />
      )
    },
    {
      title: 'Actions',
      key: 'actions',
      width: 150,
      render: (_, record) => (
        <Space size="small">
          <Tooltip title="View Details">
            <Button
              type="text"
              icon={<EyeOutlined />}
              onClick={() => handleView(record)}
            />
          </Tooltip>
          <Tooltip title="Edit Document">
            <Button
              type="text"
              icon={<EditOutlined />}
              onClick={() => handleEdit(record)}
            />
          </Tooltip>
          <Tooltip title="Download">
            <Button
              type="text"
              icon={<DownloadOutlined />}
              onClick={() => {
                if (record.fileUrl) {
                  window.open(record.fileUrl, '_blank');
                } else {
                  message.info('File URL not available');
                }
              }}
            />
          </Tooltip>
          <Popconfirm
            title="Are you sure you want to delete this document?"
            onConfirm={() => handleDelete(record)}
            okText="Yes"
            cancelText="No"
          >
            <Tooltip title="Delete Document">
              <Button
                type="text"
                danger
                icon={<DeleteOutlined />}
              />
            </Tooltip>
          </Popconfirm>
        </Space>
      )
    }
  ];

  return (
    <div className="document-upload-panel">
      <div className="panel-header">
        <Title level={2}>
          <FolderOpenOutlined style={{ marginRight: 8, color: '#cfb53b' }} />
          Munoth Document Management Panel
        </Title>
        <Text type="secondary">
          Upload, manage, and organize Financial and Compliance documents
        </Text>
      </div>

      {/* Tab Navigation */}
      <Card className="tab-navigation">
        <Space size="large">
          <Button
            type={activeTab === 'upload' ? 'primary' : 'default'}
            icon={<PlusOutlined />}
            size="large"
            onClick={() => setActiveTab('upload')}
          >
            Upload New Document
          </Button>
          <Button
            type={activeTab === 'manage' ? 'primary' : 'default'}
            icon={<FileTextOutlined />}
            size="large"
            onClick={() => setActiveTab('manage')}
          >
            Manage Documents ({documents.length})
          </Button>
        </Space>
      </Card>

      {activeTab === 'upload' && (
        <Card className="upload-card">
          <Form
            form={form}
            layout="vertical"
            onFinish={handleSubmit}
            className="upload-form"
          >
            <Row gutter={24}>
              <Col span={12}>
                <Form.Item
                  label="Document Category"
                  name="category"
                  rules={[{ required: true, message: 'Please select a category' }]}
                >
                  <Select
                    placeholder="Select document category"
                    onChange={handleCategoryChange}
                    size="large"
                  >
                    {Object.keys(documentCategories).map(category => (
                      <Option key={category} value={category}>
                        {category}
                      </Option>
                    ))}
                  </Select>
                </Form.Item>
              </Col>

              <Col span={12}>
                <Form.Item
                  label="Sub Category"
                  name="subCategory"
                  rules={[{ required: true, message: 'Please select a sub category' }]}
                >
                  <Select
                    placeholder="Select sub category"
                    onChange={handleSubCategoryChange}
                    disabled={!selectedCategory}
                    size="large"
                  >
                    {getSubCategories().map(subCat => (
                      <Option key={subCat.value} value={subCat.value}>
                        {subCat.label}
                      </Option>
                    ))}
                  </Select>
                </Form.Item>
              </Col>
            </Row>

            {currentInfo && (
              <Card size="small" className="category-info">
                <Text type="secondary">{currentInfo.description}</Text>
              </Card>
            )}

            <Divider />

            <Row gutter={24}>
              <Col span={12}>
                <Form.Item
                  label="Document Name"
                  name="documentName"
                  rules={[{ required: true, message: 'Please enter document name' }]}
                >
                  <Input
                    placeholder="Enter document name"
                    prefix={<FileTextOutlined />}
                    size="large"
                  />
                </Form.Item>
              </Col>

              <Col span={12}>
                <Form.Item
                  label="Document Date"
                  name="documentDate"
                  rules={[{ required: true, message: 'Please select document date' }]}
                >
                  <DatePicker
                    placeholder="Select document date"
                    style={{ width: '100%' }}
                    size="large"
                    suffixIcon={<CalendarOutlined />}
                  />
                </Form.Item>
              </Col>
            </Row>

            {currentInfo && currentInfo.fields.length > 3 && (
              <Row gutter={24}>
                <Col span={12}>
                  <Form.Item
                    label={currentInfo.fields[3]}
                    name="additionalField"
                    rules={[{ required: false }]}
                  >
                    <Input
                      placeholder={`Enter ${currentInfo.fields[3].toLowerCase()}`}
                      size="large"
                    />
                  </Form.Item>
                </Col>
              </Row>
            )}

            <Form.Item
              label="Document File"
              name="documentFile"
              rules={[
                {
                  required: true,
                  message: 'Please upload a document file',
                  validator: (_, value) => {
                    if (fileList.length > 0 && uploadedFileUrl) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error('Please upload a document file'));
                  }
                }
              ]}
            >
              <Upload
                fileList={fileList}
                onChange={handleFileChange}
                beforeUpload={() => false}
                accept=".pdf,.doc,.docx,.xls,.xlsx"
                maxCount={1}
              >
                <Button
                  icon={<UploadOutlined />}
                  size="large"
                  loading={isUploading}
                  disabled={isUploading}
                >
                  {isUploading ? 'Uploading...' : 'Choose Document File (Auto-Upload)'}
                </Button>
              </Upload>

              {/* Upload Status Messages */}
              {uploadError && (
                <div style={{ color: '#ff4d4f', marginTop: 8, fontSize: '12px' }}>
                  {uploadError}
                </div>
              )}
              {uploadSuccess && (
                <div style={{ color: '#52c41a', marginTop: 8, fontSize: '12px' }}>
                  ✓ File uploaded successfully
                </div>
              )}
            </Form.Item>

            <Divider />

            <Space size="large">
              <Button
                type="primary"
                htmlType="submit"
                icon={<SaveOutlined />}
                size="large"
                disabled={!selectedCategory || !selectedSubCategory || isUploading || !uploadedFileUrl}
              >
                Save Document
              </Button>

              <Button
                icon={<ReloadOutlined />}
                size="large"
                onClick={resetForm}
              >
                Reset Form
              </Button>

              {/* Debug Button - Remove this in production */}
              <Button
                type="dashed"
                size="large"
                onClick={async () => {
                  console.log('🧪 Testing API call...');
                  try {
                    const testFile = new File(['test content'], 'test.pdf', { type: 'application/pdf' });
                    await uploadDocumentToS3(testFile);
                  } catch (error) {
                    console.error('🧪 Test API call failed:', error);
                  }
                }}
              >
                Test API
              </Button>
            </Space>
          </Form>
        </Card>
      )}

      {/* Document Management Table */}
      {activeTab === 'manage' && (
        <Card className="manage-card">
          <div style={{ marginBottom: 16 }}>
            <Title level={4}>Document Management</Title>
            <Text type="secondary">
              View, edit, and delete uploaded documents
            </Text>
          </div>

          {documents.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '40px 0' }}>
              <FileTextOutlined style={{ fontSize: 48, color: '#d9d9d9', marginBottom: 16 }} />
              <div style={{ fontSize: 16, color: '#666', marginBottom: 8 }}>
                No documents uploaded yet
              </div>
              <Text type="secondary">
                Click "Upload New Document" to add your first document
              </Text>
            </div>
          ) : (
            <Table
              columns={columns}
              dataSource={documents}
              rowKey="id"
              pagination={{
                pageSize: 10,
                showSizeChanger: true,
                showQuickJumper: true,
                showTotal: (total, range) =>
                  `${range[0]}-${range[1]} of ${total} documents`
              }}
              scroll={{ x: 1000 }}
              size="middle"
            />
          )}
        </Card>
      )}

      {/* Edit Modal */}
      <Modal
        title="Edit Document"
        open={isEditModalVisible}
        onCancel={() => {
          setIsEditModalVisible(false);
          setEditingDocument(null);
          editForm.resetFields();
          setEditFileList([]);
        }}
        footer={null}
        width={800}
      >
        <Form
          form={editForm}
          layout="vertical"
          onFinish={handleEditSubmit}
        >
          <Row gutter={24}>
            <Col span={12}>
              <Form.Item
                label="Document Category"
                name="category"
                rules={[{ required: true, message: 'Please select a category' }]}
              >
                <Select
                  placeholder="Select document category"
                  size="large"
                >
                  {Object.keys(documentCategories).map(category => (
                    <Option key={category} value={category}>
                      {category}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>

            <Col span={12}>
              <Form.Item
                label="Sub Category"
                name="subCategory"
                rules={[{ required: true, message: 'Please select a sub category' }]}
              >
                <Select
                  placeholder="Select sub category"
                  size="large"
                >
                  {getSubCategories().map(subCat => (
                    <Option key={subCat.value} value={subCat.value}>
                      {subCat.label}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={24}>
            <Col span={12}>
              <Form.Item
                label="Document Name"
                name="documentName"
                rules={[{ required: true, message: 'Please enter document name' }]}
              >
                <Input
                  placeholder="Enter document name"
                  prefix={<FileTextOutlined />}
                  size="large"
                />
              </Form.Item>
            </Col>

            <Col span={12}>
              <Form.Item
                label="Document Date"
                name="documentDate"
                rules={[{ required: true, message: 'Please select document date' }]}
              >
                <DatePicker
                  placeholder="Select document date"
                  style={{ width: '100%' }}
                  size="large"
                  suffixIcon={<CalendarOutlined />}
                />
              </Form.Item>
            </Col>
          </Row>

          <Form.Item
            label="Document File"
            name="documentFile"
          >
            <Upload
              fileList={editFileList}
              onChange={({ fileList: newFileList }) => setEditFileList(newFileList)}
              beforeUpload={() => false}
              accept=".pdf,.doc,.docx,.xls,.xlsx"
              maxCount={1}
            >
              <Button icon={<UploadOutlined />} size="large">
                Choose New File (Optional)
              </Button>
            </Upload>
          </Form.Item>

          <div style={{ textAlign: 'right', marginTop: 24 }}>
            <Space>
              <Button onClick={() => setIsEditModalVisible(false)}>
                Cancel
              </Button>
              <Button type="primary" htmlType="submit" icon={<SaveOutlined />}>
                Update Document
              </Button>
            </Space>
          </div>
        </Form>
      </Modal>
    </div>
  );
};

export default DocumentUploadPanel;
