import React from 'react';
import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';

function CommentCard({ comment }) {
  return (
    <Card style={{ width: '18rem', margin: '5px', maxHeight: '600px' }}>
      <Card.Body>
        {comment.content}
      </Card.Body>
    </Card>
  );
}

CommentCard.propTypes = {
  comment: PropTypes.shape({
    content: PropTypes.string,
  }).isRequired,
};

export default CommentCard;
