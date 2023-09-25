
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const objet=[
    { id:1,
      name:'clavier',
      price:'40',
      description:'',
      images:'../images/clavier.jpg'
   },
   {  id:2,
      name:'souris',
      price:'30',
      description:'',
      images:'/images/souris.jpg'
   }
];


function Product(){
    return(
        <div style={{display:"flex",justifyContent:""}}>
        {objet.map((el)=>(
             <Card style={{ width: '18rem' }}>
             <Card.Img variant="top" src={el.images} />
             <Card.Body>
               <Card.Title>{el.name}</Card.Title>
               <Card.Text>price :{el.price}  
               </Card.Text>
               <Card.Text>description : {el.description}</Card.Text>
               <Button variant="primary">Acheter</Button>
             </Card.Body>
           </Card>
        ))}
        
        </div>
    )
}
export default Product;