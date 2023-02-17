import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const DepDropdown = () => {

    const dropdownList = ['-----Please Select-----', 'Fruits', 'Vegetables', 'Colors']

    const dependentDropdowmList = {
        Select: ['-----Please Select-----'],
        Fruits: ['-----Please Select-----', 'Apple', 'Mango', 'Banana', 'Grapes', 'Oranges'],
        Vegetables: ['-----Please Select-----', 'Carrot', 'Tomato', 'Onion', 'Potato', 'Radish'],
        Colors: ['-----Please Select-----', 'Red', 'Blue', 'Green', 'Yellow', 'Pink']
    }

    const [selectedDropdownList, setDropdownSelectedList] = useState('Select')
    const [selectedDepDropList, setSelectedDepDropList] = useState('-----Please Select-----')

    console.log(selectedDropdownList)
    console.log(selectedDepDropList)


    return (
        <Container fluid >
            <Row className="mt-4 pt-4">
                <Col lg={6} md={8} sm={12} className="p-3 m-auto shadow-lg rounded-lg bg-light">
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
                            {selectedDropdownList && <select onChange={e => setSelectedDepDropList(e.target.value)} >
                                {
                                    dependentDropdowmList[selectedDropdownList].map(dlist => (
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