import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const DepDropdown = () => {

    const dropdownList = ['Select', 'Fruits', 'Vegetables', 'Colors']

    const dependentList = {
        Select: ['.....'],
        Fruits: ['.....', 'Apple', 'Mango', 'Banana', 'Grapes', 'Oranges'],
        Vegetables: ['.....', 'Carrot', 'Tomato', 'Onion', 'Potato', 'Radish'],
        Colors: ['.....', 'Red', 'Blue', 'Green', 'Yellow', 'Pink']
    }

    const [selectedDropdownList, setDropdownSelectedList] = useState('Select')
    const [depSelectedList, setDepSelectedList] = useState('.....')

    console.log(selectedDropdownList)
    console.log(depSelectedList)



    return (
        <Container fluid >
            <Row className="mt-4 pt-4">
                <Col lg={3} md={6} sm={6} className="p-3 m-auto shadow-lg rounded-lg bg-light">
                    <Row>
                        <Col>
                            <select onChange={e => setDropdownSelectedList(e.target.value)}>
                                {
                                    dropdownList.map(list => (
                                        <option key={list} >{list}</option>
                                    ))
                                }
                            </select>
                        </Col>
                        <Col>
                            {selectedDropdownList && <select onChange={e => setDepSelectedList(e.target.value)} >
                                {
                                    dependentList[selectedDropdownList].map(dlist => (
                                        <option key={dlist}>{dlist}</option>
                                    ))
                                }

                            </select>
                            }
                        </Col>

                    </Row>
                </Col>
            </Row>
        </Container>


    )
}

export default DepDropdown