import React, {useState} from 'react';
import './Input.css'

const Input = ({label, type, disabled, onChange, value, icon, options = [], multiple, prefix}) => {

	if (type === 'colors') {
		return <div className="custom-input">
			<label>{icon}{label}</label>
			{value}
		</div>
	}
	if (type === 'image') {

		const custom = (data) => ({
			target: {
				value: data
			}
		})

		const handleDrop = (e) => {
			e.preventDefault();

			const files = Array.from(e.dataTransfer.files);
			// Filter only image files if needed
			const imageFiles = files.filter((file) => file.type.startsWith('image/'));

			onChange(custom([...value, ...imageFiles]));
		};

		const handleInputChange = (e) => {
			const files = Array.from(e.target.files);
			// Filter only image files if needed
			const imageFiles = files.filter((file) => file.type.startsWith('image/'));

			onChange(custom([...value, ...imageFiles]));
		};

		const handleRemoveImage = (index) => {
			const updatedImages = [...value];
			updatedImages.splice(index, 1);
			onChange((updatedImages));
		};

		const handleUpload = async () => {
			// Implement logic to send images to the server (Node.js)
			// Use FormData to append images and send to the server using fetch or axios
			const formData = new FormData();
			value.forEach((image, index) => {
				formData.append(`image-${index}`, image);
			});

			// Example using fetch
			fetch('/api/upload', {
				method: 'POST',
				body: formData,
			})
				.then((response) => response.json())
				.then((data) => {
					console.log('Upload success:', data);
				})
				.catch((error) => {
					console.error('Upload error:', error);
				});
		};

		const InputImages = () => (<>
			<input
				type="file"
				accept="image/*"
				onChange={handleInputChange}
				multiple={multiple}
			/>
			<div
				onDrop={handleDrop}
				onDragOver={(e) => e.preventDefault()}
				style={{
					border: '2px dashed #aaa',
					padding: "100px",
					textAlign: 'center',
					cursor: 'pointer',
				}}
			>
				Drop images here
			</div>
		</>)


		return (
			<div className="custom-input">
				<label>{label}</label>
				{multiple
					? <InputImages/>
					: value.length
						? ""
						: <InputImages/>
				}
				<div className="images__container">
					{value.map((image, index) => {
						console.log('typeof image', typeof image);
						return (
							<div key={index} className="images-item">
								<img src={URL.createObjectURL(image)} alt={`image-${index}`} width="100" />
								<button className="remove__image" onClick={() => handleRemoveImage(index)}><i className="bi bi-trash"></i></button>
							</div>
						)
					})}
				</div>
				{/*<button onClick={handleUpload}>Upload Images</button>*/}
			</div>
		);
	}
	if (type === 'select') {
		return <div className="custom-input">
			<label>{icon}{label}</label>
			<select value={value} onChange={onChange} disabled={disabled}>
				{options.map((option, key) => (
					<option key={key} value={option}>
						{option}
					</option>
				))}
			</select>
		</div>
	}
	if (type === 'textarea') {
		return <div className="custom-input">
			<label>{icon}{label}</label>
			{prefix
				? <label className="prefix__container textarea">
					<span>{prefix}</span>
					<textarea value={value} onChange={onChange} />
				</label>
				:  <textarea value={value} onChange={onChange} />
			}
		</div>
	}
	return (
		<div className="custom-input">
			<label>{icon}{label}</label>
			{prefix
				? <label className="prefix__container">
					<span>{prefix}</span>
					<input type={type} value={value} onChange={onChange} disabled={disabled}/>
				</label>
				:  <input type={type} value={value} onChange={onChange} disabled={disabled}/>
			}
		</div>
	);
};

export default Input;
