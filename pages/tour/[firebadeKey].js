/* eslint-disable @next/next/no-img-element */
// import React, { useEffect, useState } from 'react';
// import { useRouter } from 'next/router';
// import { getSingleTour } from '../../api/tourData';

export default function ViewTour() {
//   const [tourDetails, setTourDetails] = useState({});
//   const router = useRouter();

  //   const { firebaseKey } = router.query;

  //   useEffect(() => {
  //     getSingleTour(firebaseKey).then(setTourDetails);
  //   }, [firebaseKey]);

  return (
    <div className="mt-5 d-flex flex-wrap">
      <h1>
        {/* {tourDetails.name} */}
        tour name
      </h1>
      <div className="d-flex flex-column">
        tour image
        {/* <img src={tourDetails.image} alt={tourDetails.name} style={{ width: '300px' }} /> */}
      </div>
      <div className="text-white ms-5 details">
        <p>
          {/* {tourDetails.description} */}
          tour description
        </p>
        <h5>
          {/* {tourDetails.location} */}
          tour location
        </h5>
        <h5>
          {/* {tourDetails.price} */}
          tour price
        </h5>
      </div>
    </div>
  );
}
