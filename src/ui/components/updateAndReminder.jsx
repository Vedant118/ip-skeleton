import React from "react";
import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";
import { ArrowForward, Close } from "@mui/icons-material";

function UpdateReminder() {
	function Card({ title, subTitle, showArrow, backgroundColor }) {
		return (
			<Box
				sx={{
					padding: "10px",
					borderRadius: "3px",
					backgroundColor,
					margin: "auto",
				}}
			>
				<Box>
					<Box
						sx={{
							display: "flex",
							alignItems: "flex-start",
							justifyContent: "space-between",
							paddingBottom: "10px",
						}}
					>
						<Box>
							<Typography variant="body2" sx={{ marginBottom: "4px" }}>
								{title}
							</Typography>
							<Typography variant="h6" sx={{ margin: 0, fontSize: 16, fontWeight: '600' }}>
								{subTitle}
							</Typography>
						</Box>
						<Box
							sx={{
								width: "15px",
								height: "15px",
								borderRadius: "3px",
								backgroundColor: "#537473",
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
							}}
						>
							<Close
								sx={{
									width: "15px",
									color: "white",
									cursor: "pointer",
								}}
							/>
						</Box>
					</Box>
					{showArrow && (
						<Box sx={{ display: "flex", justifyContent: "flex-end" }}>
							<ArrowForward />
						</Box>
					)}
				</Box>
			</Box>
		);
	}

	return (
		<Box
			sx={{
				width: "100%",
				height: '100vh',
				maxWidth: "400px",
				margin: "auto",
				backgroundColor: "white",

				padding: 2,
			}}
		>
			<Typography variant="h6" sx={{ marginBottom: 3 }}>Updates and Reminders</Typography>
			<Card
				title="Renewal Reminder"
				subTitle="You have xx Patents due for renewal"
				showArrow={true}
				backgroundColor="rgba(145, 228, 224, 1)"
			/>
			<Box sx={{ marginBottom: "15px" }} />
			<Card
				title="New Feature Card"
				subTitle="Description for new feature"
				backgroundColor="rgba(255, 235, 165, 1);
        "
			/>
		</Box>
	);
}

export default UpdateReminder;