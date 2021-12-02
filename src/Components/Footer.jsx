import { Facebook, Instagram, Mail, Phone, Pinterest, Room, Twitter } from "@material-ui/icons"
import styled from "styled-components"
import { mobile } from "../responsive";

const Container = styled.div`
    display:flex;
    ${mobile({ flexDirection: "column"})}
`

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column; 
    padding: 20px;    
`

const Logo = styled.h1`

`

const Desc = styled.p`
    margin: 20px 0px;

`

const SocialContainer = styled.div`
    display: flex;
`

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%; 
    color: white; 
    background-color: #${props =>props.color};
    display: flex; 
    align-items: center; 
    justify-content: center;
    margin-right:20px;
`
const Title = styled.h3`
    margin-bottom: 30px;
`

const List = styled.ul`
    margin:0;
    padding:0;
    list-style:none;
    display:flex;
    flex-wrap:wrap;
`

const ListItem = styled.li`
    width:50%;
    margin-bottom: 10px;
`
const Center = styled.div`
    flex: 1;
    padding:20px;
    ${mobile({ display: "none"})}
`

const Right = styled.div`
    flex: 1;
    padding:20px;
    ${mobile({ backgroundColor: "#fff8f8"})}

`

const ContactItem = styled.div`
    margin-bottom:20px;
    display: flex; 
    align-items: center;
`

const Payment = styled.img`
    width:50%;
`

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>HAPHONG</Logo>
                <Desc>Because shops are so common around the world, it is possible that you could be asked about it for your next IELTS test. This could be a question like, “Do you like shopping?” but today we are not going to focus on shopping as an activity. Instead, we will mostly look at shops as places where you can buy things.</Desc>
                <SocialContainer>
                    <SocialIcon color="3B5999">
                        <Facebook/>
                    </SocialIcon>
                    <SocialIcon color="E4405F">
                        <Instagram/>
                    </SocialIcon>
                    <SocialIcon color="55ACEE">
                        <Twitter/>
                    </SocialIcon>
                    <SocialIcon color="E60023">
                        <Pinterest/>
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Woman Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Term</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem><Room style={{marginRight:"10px"}}/>126/20 Tran Cao Van Street, Tam Thuan,Thanh Khe, Da Nang</ContactItem>
                <ContactItem><Phone style={{marginRight:"10px"}}/>0905852357</ContactItem>
                <ContactItem><Mail style={{marginRight:"10px"}}/>htthung.17it1@vku.udn.vn</ContactItem>
                <Payment src="https://i.ibb.co/XxqtL9h/payment.png"/>
            </Right>
        </Container>
    )
}

export default Footer
