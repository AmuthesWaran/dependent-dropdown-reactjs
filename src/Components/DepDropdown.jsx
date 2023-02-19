import React, { useState } from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'

const DepDropdown = () => {

    const dropdownList = ['-----Please Select-----', 'Fruits', 'Vegetables', 'Colors']

    const dependentDropdowmList = {
        '-----Please Select-----': ['-----Please Select-----'],
        'Fruits': ['-----Please Select-----', 'Apple', 'Mango', 'Banana', 'Grapes', 'Oranges'],
        'Vegetables': ['-----Please Select-----', 'Carrot', 'Tomato', 'Onion', 'Potato', 'Radish'],
        'Colors': ['-----Please Select-----', 'Red', 'Blue', 'Green', 'Yellow', 'Pink']
    }

    const [selectedDropdownList, setDropdownSelectedList] = useState('-----Please Select-----')
    const [selectedDepDropList, setSelectedDepDropList] = useState('-----Please Select-----')

    console.log(selectedDropdownList)
    console.log(selectedDepDropList)


    return (
        <Container fluid >
            <Row className="mt-4 pt-4">
                <Col lg={3} md={6} sm={8} className="p-3 m-auto shadow-lg rounded-lg bg-light">
                    <Row>
                        <Col>
                            <Form.Select onChange={e => setDropdownSelectedList(e.target.value)}>

                                {
                                    dropdownList.map(list => (
                                        <option key={list} >{list}</option>
                                    ))
                                }
                            </Form.Select>


                            {selectedDropdownList && <Form.Select className="mt-5" onChange={e => setSelectedDepDropList(e.target.value)} >
                                {
                                    dependentDropdowmList[selectedDropdownList].map(dlist => (
                                        <option key={dlist}>{dlist}</option>
                                    ))
                                }

                            </Form.Select>
                            }
                        </Col>

                    </Row>
                </Col>
            </Row>
        </Container>


    )
}

export default DepDropdown