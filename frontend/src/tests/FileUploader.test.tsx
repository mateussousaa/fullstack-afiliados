import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import FileUploader from '../components/FileUploader';
import { ToastContainer } from 'react-toastify';

describe('FileUploader', () => {
  test('renders FileUploader component with Choose File button', () => {
    render(<FileUploader />);

    const chooseFileButton = screen.getByText(/Choose File/i);
    expect(chooseFileButton).toBeInTheDocument();
  });

  test('opens file input on Choose File button click', () => {
    render(<FileUploader />);

    const chooseFileButton = screen.getByText(/Choose File/i);
    fireEvent.click(chooseFileButton);

    const fileInput = screen.getByTestId('fileInput');
    expect(fileInput).toBeInTheDocument();
  });

  test('displays selected file name after file selection', () => {
    render(<FileUploader />);

    const chooseFileButton = screen.getByText(/Choose File/i);
    fireEvent.click(chooseFileButton);

    const fileInput = screen.getByTestId('fileInput');
    const file = new File(['test file content'], 'test.txt', { type: 'text/plain' });
    fireEvent.change(fileInput, { target: { files: [file] } });

    const selectedFileName = screen.getAllByText(/test.txt/i);
    expect(selectedFileName.length).toBeGreaterThan(0);
  });

  test('displays "Drag and drop your file here" when no file is selected', () => {
    render(<FileUploader />);

    const dragDropArea = screen.getByText(/Drag and drop your file here/i);
    expect(dragDropArea).toBeInTheDocument();
  });

  test('displays "File is required" when clicking Upload File without selecting a file', async () => {
    render(
    <>
      <ToastContainer />
      <FileUploader />
    </>);

    const uploadButton = screen.getByText(/Upload File/i);
    fireEvent.click(uploadButton);

    const notification = await screen.findByText(/File is required/i);
    expect(notification).toBeInTheDocument();
  });
});
