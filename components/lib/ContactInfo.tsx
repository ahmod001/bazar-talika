import { Link as ExpoLink, RelativePathString } from "expo-router";
import Content from "../content"

const ContactInfo = () => {
    return (
        <>
            <Content.Title>
                Contact
            </Content.Title>
            <Content.Block>
                Got feedback, questions, or ideas? I’d love to hear from you!{'\n'}
                Email: <Link href="mailto:hasan.webdev1@gmail.com">hasan.webdev1@gmail.com</Link> {'\n'}
                Phone: <Link href="tel:+8801743477288">+8801743477288</Link>
            </Content.Block>
        </>
    )
}

const Link = ({ children, href }: { children: string, href: string }) => (
    <ExpoLink style={{ color: 'blue' }} href={href as RelativePathString}>{children}</ExpoLink>
);
Link.displayName = 'Link';

export default ContactInfo