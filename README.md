# Table Booking Service (FE)

An online platform enabling customers to search and book restaurant tables based on their location and available time slots. The service provides real-time availability and restaurant recommendations.

**Tech Stack for FE:** ReactJS, Docker, AWS (ECS, RDS, PostgreSQL)

**GitHub:** [Frontend](https://github.com/diakymenko/booking-service-front-end) | [Backend](https://github.com/diakymenko/table_booking_service) | [Demo](https://adaacademy.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=1e7a5db5-140e-4388-b862-aef501636909)

## Key Features
- Fetching restaurant data using the Yelp API to display restaurant names, types, images, and review ratings.  
- Determining the user's location through ipapi/ipify APIs and recommending nearby restaurants.  
- Enabling reservations by considering available time slots, table capacity, average dining duration, and preventing overbooking.  
- Implementing full CRUD functionality for Reservation and Restaurant models using Python, Flask, PostgreSQL, and SQLAlchemy.  
- Deploying the application with Docker and AWS (ECS, RDS).
