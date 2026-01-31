import { Table } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import { useParams } from "react-router";
import * as userClient from "../../Account/client";
import * as courseClient from "../client";
import { useState, useEffect } from "react";

export default function PeopleTable() {
    const {cid} = useParams();
    const [users, setUsers] = useState<any[]>([]);
    const [enrollments, setEnrollments] = useState<any[]>([]);
    const fetchUsers = async() => {
        const usersList = await userClient.findAllUsers();
        setUsers(usersList);
    }
    const fetchEnrollments = async() => {
        if(!cid) return;
        const enrollmentsList = await courseClient.findEnrollmentsForCourse(cid);
        setEnrollments(enrollmentsList);
    }

    useEffect(() => {
        fetchUsers();
        fetchEnrollments();
    }, [cid]);
return (
    <div id="wd-people-table">
    <Table striped>
    <thead>
    <tr><th>Name</th><th>Login ID</th><th>Section</th><th>Role</th><th>Last Activity</th><th>Total Activity</th></tr>
    </thead>
    <tbody>
    {    
        users.filter((usr) => 
            enrollments.some((enrollment) => enrollment.user === usr._id )
        )
        .map((user:any) => (
            <tr key={user._id}>
                <td className="wd-full-name text-nowrap">
                <FaUserCircle className="me-2 fs-1 text-secondary" />
                <span className="wd-first-name">{user.firstName}</span>
                <span className="wd-last-name">{user.lastName}</span>
                </td>
                <td className="wd-login-id">{user.loginId}</td>
                <td className="wd-section">{user.section}</td>
                <td className="wd-role">{user.role}</td>
                <td className="wd-last-activity">{user.lastActivity}</td>
                <td className="wd-total-activity">{user.totalActivity}</td>
                </tr>  
        ))}
    </tbody>
    </Table>
    </div>
);}