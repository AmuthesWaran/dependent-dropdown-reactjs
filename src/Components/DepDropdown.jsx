import React, { useState } from 'react'
import { Button, Col, Container, Form, InputGroup, Row } from 'react-bootstrap'

const DepDropdown = () => {

    const categoryList = ['-----Please Select-----', 'Fruits', 'Vegetables', 'Colors', 'Others']

    const subCategoryList = {
        '-----Please Select-----': ['-----Please Select-----'],
        'Fruits': ['-----Please Select-----', 'Apple', 'Mango', 'Banana', 'Grapes', 'Oranges'],
        'Vegetables': ['-----Please Select-----', 'Carrot', 'Tomato', 'Onion', 'Potato', 'Radish'],
        'Colors': ['-----Please Select-----', 'Red', 'Blue', 'Green', 'Yellow', 'Pink'],
        'Others': ['--']
    }

    const [selectedCategoryList, setSelectedCategoryList] = useState('-----Please Select-----')
    const [selectedSubCategoryList, setSelectedSubCategoryList] = useState('-----Please Select-----')

    const [categoryError, setCategoryError] = useState(false)
    const [subCategoryError, setSubCategoryError] = useState(false)

    function submitForm(e) {
        e.preventDefault();



        if (selectedCategoryList === '-----Please Select-----') {
            setCategoryError(true)

        }
        else {
            setCategoryError(false)
            console.log(selectedCategoryList)
        }

        if (selectedSubCategoryList === '-----Please Select-----') {
            setSubCategoryError(true)
        }
        else {
            setSubCategoryError(false)
            console.log(selectedSubCategoryList)
        }






    }

    return (
        <Container fluid >
            <Form onSubmit={submitForm}>
                <Row className="mt-4 pt-4">
                    <Col lg={3} md={6} sm={8} className="p-3 m-auto shadow-lg rounded-lg bg-light">
                        <Row>
                            <Col>

                                <Form.Select name='category' isInvalid={categoryError} onChange={e => setSelectedCategoryList(e.target.value)}>

                                    {
                                        categoryList.map(list => (
                                            <option key={list} >{list}</option>
                                        ))
                                    }
                                </Form.Select>



                                {(selectedCategoryList !== '-----Please Select-----') ? (selectedCategoryList === 'Others') ?
                                    <>
                                        <InputGroup className="mb-3">
                                            <Form.Control
                                                className="mt-5"
                                                placeholder="Please Specify"
                                                aria-label="Please Specify"
                                                aria-describedby="basic-addon2"
                                            />
                                        </InputGroup>
                                    </> : <>
                                        {selectedCategoryList &&

                                            <Form.Select name='subcategory' className="mt-5" isInvalid={subCategoryError} onChange={e => setSelectedSubCategoryList(e.target.value)} >
                                                {
                                                    subCategoryList[selectedCategoryList].map(dlist => (
                                                        <option key={dlist}>{dlist}</option>
                                                    ))
                                                }

                                            </Form.Select>
                                        }
                                    </> :
                                    <>


                                    </>
                                }
                                <Button className='mt-5' type='submit'>Submit</Button>
                            </Col>

                        </Row>
                    </Col>
                </Row>

            </Form>
        </Container>


    )
}

export default DepDropdown