<section id="description">

                            <h3 className="font-weight-bold mb-3 p-0"><strong>{this.state.event.event_title}</strong></h3>
                            <ul>
                                <li>
                                    <br /> <li> <strong><input type="text" defaultValue={this.state.event_title} onChange={this.handleInputChange} name="summary" /></strong></li>

                                    <br /> <li> Summary: <input type="text" defaultValue={this.state.summary} onChange={this.handleInputChange} name="summary" /></li>


                                    <br /> Max Attendance: <input type="text" defaultValue={this.state.max_attend} onChange={this.handleInputChange} name="max_attend" />
                                    <br /> Age Min: <input type="text" defaultValue={this.state.age_min} onChange={this.handleInputChange} name="age_min" />
                                    <br /> Date: <input type="text" defaultValue={this.state.date} onChange={this.handleInputChange} name="date" />
                                    <br /> Time: <input type="text" defaultValue={this.state.time} onChange={this.handleInputChange} name="time" />
                                    <br /> Address: <input type="text" defaultValue={this.stateaddr1} onChange={this.handleInputChange} name="addr1" />
                                    <br /> City: <input type="text" defaultValue={this.state.city} onChange={this.handleInputChange} name="city" />
                                    <br /> State: <input type="text" defaultValue={this.state.state} onChange={this.handleInputChange} name="state" />
                                    <br /> Location Name: <input type="text" defaultValue={this.state.location_name} onChange={this.handleInputChange} name="location_name" />

                                </li>

                            </ul>
                            <button onClick={this.changeEditMode}> X </button>
                            <button onClick={this.updateComponentValue}> OK </button>

                            <p>by <a><strong>Creator</strong></a>, 19/08/2018</p>

                            <h3>Event Overview <small></small></h3>
                            <p>
                                Iudico omnesque vis at, ius an laboramus adversarium. An eirmod doctus admodum est, vero numquam et mel, an duo modo error. No affert timeam mea, legimus ceteros his in. Aperiri honestatis sit at. Eos aeque fuisset ei, case denique eam ne. Augue invidunt
                                has ad, ullum debitis mea ei, ne aliquip dignissim nec.
                        </p>
                            <ul className="cbp_tmtimeline">
                                <li>
                                    <time className="cbp_tmtime" datetime="09:30"><span>30 min.</span><span>09:30</span>
                                    </time>
                                    <div className="cbp_tmicon">
                                        1
                                </div>
                                    <div className="cbp_tmlabel">
                                        <div className="hidden-xs">
                                            <img src="img/tour_plan_1.jpg" alt="" className="rounded-circle thumb_visit" />
                                        </div>
                                        <h4>Meet and Greet</h4>
                                        <p>
                                            Vero consequat cotidieque ad eam. Ea duis errem qui, impedit blandit sed eu. Ius diam vivendo ne.
                                    </p>
                                    </div>
                                </li>
                                <li>
                                    <time className="cbp_tmtime" datetime="11:30"><span>30 Min.</span><span>11:30</span>
                                    </time>
                                    <div className="cbp_tmicon">
                                        2
                                </div>
                                    <div className="cbp_tmlabel">
                                        <div className="hidden-xs">
                                            <img src="img/tour_plan_2.jpg" alt="" className="rounded-circle thumb_visit" />
                                        </div>
                                        <h4>Assign Teams</h4>
                                        <p>
                                            Vero consequat cotidieque ad eam. Ea duis errem qui, impedit blandit sed eu. Ius diam vivendo ne.
                                    </p>
                                    </div>
                                </li>
                                <li>
                                    <time className="cbp_tmtime" datetime="13:30"><span>3 hours</span><span>13:30</span>
                                    </time>
                                    <div className="cbp_tmicon">
                                        3
                                </div>
                                    <div className="cbp_tmlabel">
                                        <div className="hidden-xs">
                                            <img src="img/tour_plan_3.jpg" alt="" className="rounded-circle thumb_visit" />
                                        </div>
                                        <h4>Code!</h4>
                                        <p>
                                            Vero consequat cotidieque ad eam. Ea duis errem qui, impedit blandit sed eu. Ius diam vivendo ne.
                                    </p>
                                    </div>
                                </li>
                                <li>
                                    <time class="cbp_tmtime" datetime="14:30"><span>1 hours</span><span>14:30</span>
                                    </time>
                                    <div class="cbp_tmicon">
                                        4
                                </div>
                                    <div class="cbp_tmlabel">
                                        <div class="hidden-xs">
                                            <img src="img/tour_plan_4.jpg" alt="" class="rounded-circle thumb_visit" />
                                        </div>
                                        <h4>Project Reviews and Nightcaps</h4>
                                        <p>
                                            Vero consequat cotidieque ad eam. Ea duis errem qui, impedit blandit sed eu. Ius diam vivendo ne.
                                    </p>
                                    </div>
                                </li>
                            </ul>
                            <hr/>

                        </section>