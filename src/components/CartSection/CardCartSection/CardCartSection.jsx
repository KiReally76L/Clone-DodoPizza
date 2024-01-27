import "./CardCartSection.scss"
import cross from "../../../assets/carts.svg"
import { Counter } from "./Counter/Counter"
import { useDispatch } from "react-redux"
import { removePizza } from "../../../store/sliceCart"

export const CardCartSection = ({ title, price, imagesUrl, info, id }) => {
	const dispatch = useDispatch()

	return (
		<article className='cardCartSection'>
			<div className='cardCartSection__img'>
				<img src={imagesUrl} alt={title} />
				<div className='cardCartSection__img__info'>
					<h3>{title}</h3>
					{info && <p>{info.substring(0, 20)}</p>}
				</div>
			</div>
			<div className='cardCartSection__info'>
				<Counter id={id} />
				<div className='cardCartSection__info__price'>
					<b>{price} ₽</b>
				</div>
				<footer className='cardCartSection__info__footer'>
					<img
						onClick={() => dispatch(removePizza(id))}
						width={40}
						height={40}
						src={cross}
						alt='cross'
					/>
				</footer>
			</div>
		</article>
	)
}
