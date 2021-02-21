import { Card } from 'antd';

const { Meta } = Card;

const CardV = ({
    cardwidth,
    logo,
    text
  }) => {
     
      return (
        <Card
            hoverable
            style={{ width: cardwidth, borderRadius: "5%" }}
            cover={<img alt="example" style={{ borderRadius:"5%"}} src={logo} />}
        >
            <Meta title={text}/>
        </Card>
        );
    };

export default CardV;