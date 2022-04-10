import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import { useDispatch } from "react-redux";
import { DELETE_INGREDIENT } from "../../../../services/actions/constructor-ingredients";

function OrderedIngredient({ item, index, moveCard }) {
  const ref = useRef(null);
  const dispatch = useDispatch();

  const [{ handlerId }, drop] = useDrop({
    accept: "component",
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }

      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) {
        return;
      }
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      moveCard(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });
  const [{ isDragging }, drag] = useDrag({
    type: "component",
    item: () => ({ id: item.id, index }),
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  const opacity = isDragging ? 0 : 1;
  if (item.type !== "bun") drag(drop(ref));
  const preventDefault = (e) => e.preventDefault();

  const onDelete = (id) => () => {
    dispatch({
      type: DELETE_INGREDIENT,
      id,
    });
  };
  return (
    <div
      ref={ref}
      style={{ opacity }}
      onDrop={preventDefault}
      data-handler-id={handlerId}
    >
      <div className="mt-4 mb-4 flex align-center" key={index}>
        <DragIcon type="primary" />
        <ConstructorElement
          text={item.name}
          price={item.price}
          handleClose={onDelete(item.key)}
          thumbnail={item.image}
        />
      </div>
    </div>
  );
}

export default OrderedIngredient;
