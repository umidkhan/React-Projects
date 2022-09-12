import React, { useState, useEffect } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import axios from "axios";



function BasicExample() {

  const [user, setComment] = useState([])

  const userComment = () => {
    axios.get("https://jsonplaceholder.typicode.com/comments")
      .then((data) => {
        setComment(data.data);
      });
  }
  
  useEffect(() => {
    userComment()
  }, []);

  return (
    <>
      <div className='container'>
        <div className='row'>
          {user.map(elem => {
            return (
              <>
                <div className='col-2'>
                  <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>{elem.email}</Accordion.Header>
                      <Accordion.Body>
                        {elem.body}
                      </Accordion.Body>
                    </Accordion.Item>

                  </Accordion>
                </div>
              </>
            )
          })}
        </div>
      </div>
    </>
  );
}

export default BasicExample;




