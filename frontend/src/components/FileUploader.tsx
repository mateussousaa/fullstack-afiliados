import React, { useState, useRef } from 'react';
import styled from 'styled-components';

const FileUploaderWrapper = styled.div`
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  display: flex;
  padding: 25px;
  background-color: white;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const StyledInputFile = styled.input`
  display: none;
`;

const ChooseFileButton = styled.label`
  padding: 10px 20px;
  background-color: white;
  color: black;
  border: 1px solid black;
  border-radius: 5px;
  cursor: pointer;
  white-space: nowrap;
`;

const UploadButton = styled.label`
  padding: 10px 20px;
  background-color: var(--color04);
  color: black;
  border-radius: 5px;
  cursor: pointer;
  white-space: nowrap;
`;

const SelectedFileName = styled.div`
  font-size: 16px;
  color: black;
`;

const DragDropArea = styled.div`
  border: 1px dashed black;
  border-radius: 5px;
  padding: 25px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`;

const UploadArea = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`

const UploadIcon = styled.img`
  max-width: 80px;
`;

interface FileUploaderProps {
  onFileUpload: (file: File) => void;
}

const FileUploader: React.FC<FileUploaderProps> = ({ onFileUpload }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setSelectedFile(file || null);
  };

  const handleUpload = () => {
    if (selectedFile) {
      onFileUpload(selectedFile);
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const file = event.dataTransfer.files?.[0];
    setSelectedFile(file || null);
  };

  const openFileDialog = () => {
    fileInputRef.current?.click();
  };

  return (
    <FileUploaderWrapper>
      <StyledInputFile
        type="file"
        id="fileInput"
        ref={fileInputRef}
        onChange={handleFileChange}
      />
      <DragDropArea
        onClick={openFileDialog}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        <UploadIcon src="/upload_icon.svg" alt="Upload Icon" />
        {selectedFile ? (
          <SelectedFileName>{selectedFile.name}</SelectedFileName>
        ) : (
          <>
            <div style={{ textAlign: 'center'}}>Drag and drop your file here</div>
            <span>or</span>
            <ChooseFileButton>Choose File</ChooseFileButton>
          </>
        )}
      </DragDropArea>
      <UploadArea>
        {selectedFile && <SelectedFileName>{selectedFile.name}</SelectedFileName>}
        <UploadButton onClick={handleUpload}>Upload File</UploadButton>
      </UploadArea>
    </FileUploaderWrapper>
  );
};

export default FileUploader;
