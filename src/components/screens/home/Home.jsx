import { cars } from './cars-data.js'
import CarItem from './cars-item/CarItem.jsx'

function Home() {
	return (
		<div>
			<div className='app'>
				<div className='app-content'>
					<div className='container'>
						<div style={{ marginTop: '50px' }}>
							<h2>Каталог автомобилей:</h2>
							<div
								style={{ display: 'flex', justifyContent: 'space-between' }}
							></div>
						</div>
						<div className='row justify-content-center'>
							{cars.length ? (
								cars.map(car => <CarItem key={car.id} car={car} />)
							) : (
								<p>Машин нету в наличии</p>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Home
