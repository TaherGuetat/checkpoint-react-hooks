import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";


export function AddMovie({ handleAdd }) {
  const [show, setShow] = useState(false);
  const [nMovie, setNmovie] = useState({
    title: "",
    description: "",
    posterURL: "",
    rating: 0,
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const Add = () => {
    if (nMovie.title.length <= 0) {
      alert("Please enter a new movie title");
    }
    handleAdd(nMovie);
    setNmovie({
      title: "",
      description: "",
      posterURL: "",
      rating: 0,
    })
      handleClose();
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Click to add a new movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Movie </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Movie Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="movie tiltle ..."
                autoFocus
                onChange={(e) =>
                  setNmovie({ ...nMovie, title: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Poster URL</Form.Label>
              <Form.Control
                type="text"
                placeholder="Add poster URL..."
                onChange={(e) =>
                  setNmovie({ ...nMovie, posterURL: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Rating</Form.Label>
              <Form.Control
                type="number"
                placeholder="Add Rating..."
                onChange={(e) =>
                  setNmovie({ ...nMovie, rating: +e.target.value })
                }
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Movie description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                onChange={(e) =>
                  setNmovie({ ...nMovie, description: e.target.value })
                }
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={Add}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
