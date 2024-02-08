import React from "react";

const Home = () => {
  return (
    <div>
      <div className="container" style={{marginTop: "100px"}}>
        <div className="row">
          <div className="col-md-4 mt-md-5 text-center">
            <h1 style={{ fontSize: "50px", fontWeight: "700" }}>
              Quality of Early Childhood Education Teachers
            </h1>
            <div className="row mt-4">
              <div className="col-md-6 mx-auto">
                <button type="button" className="btn btn-danger btn-block mb-2" style={{ fontSize: "15px", fontWeight: "500" }}>
                  VIEW MORE COURSES
                </button>
              </div>
              <div className="col-md-6 mx-auto">
                <button type="button" className="btn btn-danger btn-block" style={{ fontSize: "15px", fontWeight: "500" }}>
                  VIEW OUR SERVICES
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-8 mt-md-5">
            <img src="https://www.enarkuplift.in/wp-content/uploads/2024/01/Quality-of-Early-Childhood-Education-Teachers-19-19-870x440.jpg" alt="" style={{ maxWidth: "100%" }} className="mt-3 mt-md-0" /> {/* Adding margin */}
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <h2 style={{ fontWeight: "700", fontSize: "36px", textAlign: 'center', marginBottom: '40px' }}>About Us</h2>
        <div className="row">
          <div className="col-md-6">
            <h2 style={{ fontWeight: "700", fontSize: "36px" }}>Training and Development for Educators</h2>
            <p className="mt-3" style={{ fontSize: "14px" }}>Uplift offers Diploma & Certification for Training & Development of Early Childhood Educators. The program offers digital & face-to-face courses that aim to create classroom ready Pre school Teachers.</p>
            <p style={{ fontSize: "14px" }}>With a pan India workforce of 50+ Master Teacher Trainers the program utilises technology that advances learning techniques of teachers via resourceful courses, crisp modules, talented mentorship & hybrid workshops.</p>
            <p style={{ fontSize: "14px" }}>Upon completion of the Diploma program; teachers are given placement assistance thereby enhancing a teacher’s career prospect and a school’s sole aim to deliver quality education.</p>
          </div>
          <div className="col-md-6">
            <img src="https://www.enarkuplift.in/wp-content/uploads/2023/05/ENARK-UPLIFT_2-570x350.jpg" alt="" style={{ maxWidth: "100%" }} />
          </div>
        </div>
      </div>

      <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <h1 style={{ fontSize: "50px", fontWeight: "700" }}>Why Choose Us</h1>
          <p className="mt-5" style={{ fontSize: "15px" }}>
            Early Childhood Educators serve as architects, crafting the
            foundation of young minds with passion and dedication. Through their
            guidance, they foster not just academic growth but also social and
            emotional intelligence. They weave a tapestry of learning
            experiences, embracing diverse methods to meet the unique needs of
            each child. Their commitment to continuous learning sets an
            inspiring example, fuelling a culture of lifelong curiosity among
            their students. In this set of videos learn the role and
            significance of an Early Childhood Educator, how to be a super
            teacher, why is multilingualism useful in our classroom, and how a
            teacher can impart value based education amongst her pupils.
          </p>
        </div>
        <div className="col-md-6">
          <img src="https://www.enarkuplift.in/wp-content/uploads/2023/06/success_women-1101x782.png" alt=""  style={{ maxWidth: '100%'}}/>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Home;
