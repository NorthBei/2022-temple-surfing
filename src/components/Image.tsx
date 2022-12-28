import ExportedImage, { ExportedImageProps } from 'next-image-export-optimizer';

function Image(props: ExportedImageProps) {
  return (
    <ExportedImage
      {...props}
      useWebp={Boolean(
        process.env.nextImageExportOptimizer_storePicturesInWEBP
      )}
    />
  );
}

export default Image;
