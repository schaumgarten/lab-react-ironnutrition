import React from 'react';



const FoodBox = (props) => (
    <div className="column">
        <div className="box">
            <article className="media">
                <div className="media-left">
                    <figure className="image is-64x64">
                        <img src={props.food.image} />
                    </figure>
                </div>
                <div className="media-content">
                    <div className="content">
                        <p>
                            <strong>{props.food.name}</strong> <br />
                            <small>{props.food.calories} cal</small>
                        </p>
                    </div>
                </div>
                <div className="media-right">
                    <div className="field has-addons">
                        <div className="control">
                            <input
                                className="input"
                                type="number"
                                placeholder='0'
                                onChange={props.onChange}

                            />
                        </div>
                        <div className="control">
                            <button className="button is-info">
                                +
                            </button>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    </div>

);

export default FoodBox;