import React from "react";
import { getFontSizeForHeading, getTextAlign } from "../../utils/fonts";

type Props = {
  content: string,
  level: number,
  textAlign: string,
}

export const Heading = ({ content, level, textAlign }: Props) => {
  const tag = React.createElement(`h${level}`, {
    dangerouslySetInnerHTML: {__html: content},
    className: `font-heading max-w-5xl mx-auto my-5 ${getFontSizeForHeading(level)} ${getTextAlign(textAlign)}}`
  });
  return tag;
};