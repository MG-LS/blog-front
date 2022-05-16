import { useState } from "react";
import { Button } from "react-bootstrap";
import Offcanvas from "react-bootstrap/Offcanvas";
import OffcanvasHeader from "react-bootstrap/OffcanvasHeader";
import OffcanvasTitle from "react-bootstrap/OffcanvasTitle";
import OffcanvasBody from "react-bootstrap/OffcanvasBody";

function OffCanvasExample({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow} className="me-2 example">
        Жаг1
      </Button>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <OffcanvasHeader closeButton>
          <OffcanvasTitle>Offcanvas</OffcanvasTitle>
        </OffcanvasHeader>
        <OffcanvasBody>
          <div>dadas</div>
          <div>sda</div>
        </OffcanvasBody>
      </Offcanvas>
    </>
  );
}

function Example() {
  return (
    <>
      {["end"].map((placement, idx) => (
        <OffCanvasExample key={idx} placement={placement} name={placement} />
      ))}
    </>
  );
}

export default Example;
