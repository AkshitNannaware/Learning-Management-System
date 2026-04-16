import React, { useEffect, useState } from "react";
import { api } from "../../lib/api";


const StudentTests = () => {
	const [tests, setTests] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		async function fetchTests() {
			try {
				const [data, debug] = await Promise.all([api("/student/tests"), api("/student/tests/debug")]);
				console.log("StudentTests API response:", data);
				console.log("StudentTests debug response:", debug);
				setTests(Array.isArray(data) ? data : data.tests || []);
			} catch (err) {
				setError(err.message || "Failed to load tests");
			}
			setLoading(false);
		}
		fetchTests();
	}, []);

		const handleStartTest = (testId) => {
			alert(`Start Test ID: ${testId}`);
			// Implement navigation or logic to start the test
		};

		const handleViewResult = (testId) => {
			alert(`View Result for Test ID: ${testId}`);
			// Implement navigation or logic to view the result
		};

	if (loading) {
		return <div style={{ padding: "2rem" }}>Loading tests...</div>;
	}
	if (error) {
		return <div style={{ padding: "2rem", color: "red" }}>{error}</div>;
	}
	return (
		<div style={{ padding: "2rem" }}>
			<h2>My Tests</h2>
			{tests.length === 0 ? (
				<p>No tests available.</p>
			) : (
				<table style={{ width: "100%", borderCollapse: "collapse" }}>
					<thead>
						<tr>
							<th style={{ border: "1px solid #ccc", padding: "8px" }}>Test Name</th>
							<th style={{ border: "1px solid #ccc", padding: "8px" }}>Date</th>
							<th style={{ border: "1px solid #ccc", padding: "8px" }}>Status</th>
							<th style={{ border: "1px solid #ccc", padding: "8px" }}>Score</th>
							<th style={{ border: "1px solid #ccc", padding: "8px" }}>Action</th>
						</tr>
					</thead>
					<tbody>
						{tests.map((test) => (
							<tr key={test._id}>
								<td style={{ border: "1px solid #ccc", padding: "8px" }}>{test.title}</td>
								<td style={{ border: "1px solid #ccc", padding: "8px" }}>{test.scheduled_at ? new Date(test.scheduled_at).toLocaleDateString() : "-"}</td>
								<td style={{ border: "1px solid #ccc", padding: "8px" }}>{test.status || "-"}</td>
								<td style={{ border: "1px solid #ccc", padding: "8px" }}>{test.score !== undefined ? test.score : "-"}</td>
								<td style={{ border: "1px solid #ccc", padding: "8px" }}>
									<button onClick={() => handleStartTest(test._id)}>Start/Resume</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			)}
		</div>
	);
};

export default StudentTests;
