import { getTextAlign } from "../../utils/fonts";
import { relativeToAbsoluteUrls } from "../../utils/relativeToAbsoluteUrls";

type Props = {
  content: string,
  textAlign: string,
  textColor: string,
}

export const Paragraph = ({
  content,
  textAlign = "left",
  textColor
}: Props) => {
  return (
    <p
      className={`max-w-5xl mx-auto ${getTextAlign(textAlign)}`}
      style={{ color: textColor }}
      dangerouslySetInnerHTML={{ __html: relativeToAbsoluteUrls(content) }}
    />
  );
};
