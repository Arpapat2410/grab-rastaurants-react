import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import api from '../services/api'
import Card from '../component/Card';
import Loading from '../component/Loading';
import * as loadingData from '../loaging/restaurant2.json'
import Swal from 'sweetalert2'


const Restaurant = () => {
    // เป็นการใช้ React Hook ชื่อว่า useState เพื่อสร้าง state ในคอมโพเนนต์ React 
    const [restaurants, setRestaurants] = useState([])
    const [loading, setLoading] = useState(false)
    //จะทำงานเพียงครั้งเดียวเมื่อโหลดหน้าครั้งเเรกครังเดียว
    useEffect(() => {
        const fetchAllRestaurants = async () => {
            try {
                const res = await api.get(`/restaurants`)
                setRestaurants(res.data);
                setLoading(false)
            } catch (error) {
                console.error(error);
            }
        };
        setLoading(true)
        fetchAllRestaurants();
    }, []);


    const handleDelete = async (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33', 
            confirmButtonText: 'Yes, delete it!'
        }).then(async(result) => {
            if (result.isConfirmed) {
                try {
                    await api.delete(`/restaurants/${id}`);
                    await Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                    )
                    window.location.reload();
                } catch (error) {
                    console.error(error);
                }
            }   
        })

    }

    return (
        <div>
            <h1>Grab Restaurant</h1>
            <div className="row">
                {
                    !loading ? (<div className="restaurants">
                        {

                            restaurants.map(restaurant => {
                                return (
                                    <Card restaurant={restaurant} handleDelete={handleDelete} key={restaurant.id} />

                                )
                            })
                        }
                    </div>) : (
                        <Loading animation={loadingData} />
                    )
                }

            </div>
        </div>
    )
}

export default Restaurant