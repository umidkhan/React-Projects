import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from "axios"

export default function Section() {


  const [user, setUser] = useState([])

  const userFetch = () => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then((data) => {
        setUser(data.data);
      });
  }

  useEffect(() => {
    userFetch()
  }, []);

// const clicked = (props) => {
//   alert(props)
// }

  return (
    <div className='container'>
      <div className='row'>
        {user.map(elem => {
          return (
            <>
              <div className='col-3' style={{ margin: "30px", marginTop: "15px" }}>
                <Card style={{ width: '18rem', }}>
                  <Card.Img variant="top" src="https://image.shutterstock.com/image-photo/sunset-coast-lake-nature-landscape-260nw-1960131820.jpg" />
                  <Card.Body>
                    <Card.Title>{elem.name}</Card.Title>
                    <Card.Text>
                      {elem.email}
                    </Card.Text>
                    <Card.Text>
                      {elem.website}
                    </Card.Text>
                    <Card.Text>
                      {elem.username}
                    </Card.Text>
                    <Button onClick={() => alert(elem.name)} variant="primary">{elem.phone}</Button>
                  </Card.Body>
                </Card>


              </div>
            </>
          )
        })}
      </div>
    </div>
  )
}
