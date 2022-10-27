import Header from "./Header";
import keywordsContent from "./keywords";

const DefaultHeader = () => (
  <Header
    title={"Queen's COMPSA"}
    url={"https://compsa.ca/"}
    previewCard={"https://compsa.ca/preview.png"}
    description={"Homepage for Queen's Computing Students' Association"}
    keywordsContent={keywordsContent}
  />
);

export default DefaultHeader;
