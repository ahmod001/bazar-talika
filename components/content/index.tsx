import Block from "./Block";
import Title from "./Title";

const Content = {
    Block: Block,
    Title: Title
}

export default Content;
export type ContentType = typeof Content;