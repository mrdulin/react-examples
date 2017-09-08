import ImageUpload from './components/ImageUpload';

const ImageUploadContainer = class extends React.PureComponent {
  handleUploadSuccess = () => {

  }

  render() {
    return (
      <div>
        <ImageUpload showPreview={true} onUploadSuccess={this.handleUploadSuccess}/>
      </div>
    )
  }
};

export default ImageUploadContainer;
