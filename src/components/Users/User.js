import { useEffect } from "react"
import { useHistory } from 'react-router-dom';

const Users = (props) => {
    let history = useHistory()
    useEffect(() => {
        let sesstion = sessionStorage.getItem('account');
        if (!sesstion) {
            history.push('/login')
        }
    }, [])
    return (
        <div>
            users components
        </div>
    )
}

export default Users