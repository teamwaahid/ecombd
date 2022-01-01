import { Facebook, Instagram, LinkedIn, MailOutline, Phone, Room, Twitter } from "@material-ui/icons";
import styled from "styled-components";


const Container = styled.div`
    display: flex;
`
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`
const Logo = styled.h1``
const Desc = styled.p`
    margin 20px 0;
`
const SocialContent = styled.div`
    display: flex;
`
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props=>props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`
const Center = styled.div`
    flex: 1;
    padding: 20px;
`
const Title = styled.h3`
    margin-bottom: 30px;
`
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`
const Right = styled.div`
    flex: 1;
    padding: 20px;
`
const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-item: center;
`
const Payment = styled.img`
    width: 50%;
`
const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>EcomBD</Logo>
                <Desc>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum quisquam soluta hic! Ex rem assumenda modi quod ipsum distinctio odit veniam temporibus aliquid sed dolores vitae, eum dolorum, quis cupiditate sit incidunt! Ducimus, recusandae earum, eos eum quae consequuntur nobis commodi at molestias pariatur tempora sit, illum quam. Eum, a!</Desc>
                <SocialContent>
                    <SocialIcon color="3b5999">
                        <Facebook/>
                    </SocialIcon>
                    <SocialIcon color="e4405f">
                        <Instagram/>
                    </SocialIcon>
                    <SocialIcon color="55acee">
                        <Twitter/>
                    </SocialIcon>
                    <SocialIcon color="e60023">
                        <LinkedIn/>
                    </SocialIcon>
                </SocialContent>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Women Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem>
                    <Room style={{marginRight:'10px'}} /> 92/1 Hazaribagh Road, Dhaka-1209, Bangladesh
                </ContactItem>
                <ContactItem>
                    <Phone style={{marginRight:'10px'}} /> +8801674303630
                </ContactItem>
                <ContactItem>
                    <MailOutline style={{marginRight:'10px'}} /> teamwaahid@gmail.com
                </ContactItem>
                <Payment src='https://i.ibb.co/j34bVNB/payment.png' />
            </Right>
        </Container>
    );
};

export default Footer;