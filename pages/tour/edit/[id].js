import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getSingleTour } from '../../../api/tourData';
import TourForm from '../../../components/forms/TourForm';

export default function EditTour() {
  const [editItem, setEditItem] = useState({});
  const router = useRouter();

  const { id } = router.query;

  useEffect(() => {
    getSingleTour(id).then(setEditItem);
  }, [id]);

  return (<TourForm obj={editItem} setEditObj={setEditItem} />);
}
