import React, { useEffect, useState } from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup'
import './style.scss'

const Add = () => {
    const [data, setData] = useState([])
    const [input, setInput] = useState('')
    const [sortBy, setSortBy] = useState(null)

    useEffect(() => {
        getAll()
    }, [])

    function getAll() {
        fetch('http://localhost:5000/')
            .then((res) => res.json())
            .then((api) => setData(api))
    }

    function handleAdd(val) {
        fetch("http://localhost:5000/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(val),
        })
            .then((res) => res.json())
            .then((api) => {
                getAll()
            })
    }

    function handleDelete(id) {
        fetch("http://localhost:5000/" + id, { method: "DELETE" })
            .then((res) => res.json())
            .then((api) => {
                getAll()
            })
    }

    function lower(data) {
        if (typeof data === 'string') {
            return data.toLowerCase()
        }
        return data
    }
    return (
        <div className='add'>
            <Formik
                initialValues={{ name: '', img: '', desc: '', price: '' }}
                validationSchema={Yup.object({
                    name: Yup.string().required('Required'),
                    img: Yup.string().required('Required'),
                    desc: Yup.string().required('Required'),
                    price: Yup.number().required('Required')
                })}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                    setTimeout(() => {
                        handleAdd(values)
                        setSubmitting(false);
                        resetForm()
                    }, 400);

                }}
            >
                <Form>
                    <label htmlFor="img">Image</label>
                    <Field name="img" type="text" />
                    <ErrorMessage name="img" />

                    <label htmlFor="name"> Name</label>
                    <Field name="name" type="text" />
                    <ErrorMessage name="name" />

                    <label htmlFor="desc">Description</label>
                    <Field name="desc" type="text" />
                    <ErrorMessage name="desc" />

                    <label htmlFor="price">Price</label>
                    <Field name="price" type="text" />
                    <ErrorMessage name="price" />

                    <button type="submit">Submit</button>
                </Form>
            </Formik>

            <input type="text" placeholder='Search Products...' value={input} onChange={(e) => setInput(e.target.value)} />

            <div className="buttons">
                <button onClick={()=>setSortBy({preporty:"name", asc:true})}>A-Z</button>
                <button  onClick={()=>setSortBy({preporty:"name", asc:false})}>Z-A</button>
                <button  onClick={()=>setSortBy({preporty:"price", asc:true})}>Increase</button>
                <button  onClick={()=>setSortBy({preporty:"name", asc:false})}>Decrease</button>
                <button  onClick={()=>setSortBy(null)}>Default</button>
            </div>

            <table border={1}>
                <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Delete</th>

                </tr>
                {data
                    .filter((x) => x.name.toLowerCase().includes(input.toLowerCase()))
                    .sort((a, b) => {
                        if (!sortBy) {
                            return 0
                        } else if (sortBy.asc) {
                            return (lower(a[sortBy.preporty]) > lower(b[sortBy.preporty])) ? 1 : ((lower(b[sortBy.preporty]) > lower(a[sortBy.preporty])) ? -1 : 0)
                        } else if (sortBy.asc === false) {
                            return (lower(a[sortBy.preporty]) < lower(b[sortBy.preporty])) ? 1 : ((lower(b[sortBy.preporty]) < lower(a[sortBy.preporty])) ? -1 : 0)

                        }

                    })
                    .map(item => (
                        <tr>
                            <td><img width={80} src={item.img} alt="" /></td>
                            <td>{item.name}</td>
                            <td>{item.desc}</td>
                            <td>$ {item.price}</td>
                            <td onClick={() => handleDelete(item._id)}><button>X</button></td>

                        </tr>
                    ))}


            </table>

        </div>
    )
}

export default Add