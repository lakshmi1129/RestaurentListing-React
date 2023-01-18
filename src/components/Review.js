import React,{useState} from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';

function Review({data}) {
    const [open, setOpen] = useState(false);
  return (
    <>
    <p> Client Reviews</p>
    {
        data.map((item)=>(
            <Card  className="pt-5 border m=2" style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>
            <h4> {item.name}</h4>
        </Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
            {item.date}
        </Card.Subtitle>
        <Card.Text>
          Rating: {item.rating}
        </Card.Text>
        <Card.Text>
        <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        Comments
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text">
          {item.comments}
        </div>
      </Collapse>
        </Card.Text>
    
      </Card.Body>
    </Card>
        ))
    }
    </>
  )
}

export default Review