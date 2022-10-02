export const Paragraph = ({ textAlign, content, textColor }) => {
  return (
    <p
      className="max-w-5xl mx-auto"
      style={{ color: textColor }}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
};
