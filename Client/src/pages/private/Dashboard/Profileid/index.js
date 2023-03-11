import React from "react";
import './index.css'
import {useSelector} from "react-redux";
import avatar from '../../../../assets/icon/camera_200.png'
import {Button} from "react-bootstrap";

function Profile(){
    const userInfo = useSelector(state => state.app.user);
    return (
        <>
            {userInfo && (
                <>
                    <div id="profile-pages">
                        <div className="profile-pages-ramka">
                            <img src={
                                userInfo.avatar
                                    ? `${process.env.REACT_APP_BASE_URL}/user/avatar/${userInfo.avatar}`
                                    : avatar
                            } alt={userInfo.avatar}/>
                            <div className="profile-pages-info">
                                <div style={{marginBottom: 30}}>
                                    Профиль
                                </div>
                                <div className="profile-pages-info-name">
                                    {userInfo.last_name}{' '}{userInfo.first_name}
                                    <div className="profile-pages-info-phone">
                                        <span className="fa fa-phone" style={{marginInline: 7, color:'#1380C1'}}>{' '}</span>
                                        <div>
                                            {userInfo.phone}
                                        </div>
                                        <div style={{marginInline: 7}}>
                                            |
                                        </div>
                                        <span className="fa fa-phone" style={{marginInline: 7, color:'#1380C1'}}>{' '}</span>
                                        <div>
                                            {userInfo.phone}
                                        </div>
                                        <div style={{marginInline: 7}}>
                                            |
                                        </div>
                                        <svg
                                            fill="#1380C1"
                                            width={30}
                                            style={{marginInline: 7,}}
                                           viewBox="0 0 24 24"
                                           >
                                            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/>
                                        </svg>
                                        <div>
                                            {userInfo.email}
                                        </div>
                                    </div>
                                </div>
                              <div className="profile-pages-info-button">
                                  <Button>
                                      Отдыхающий
                                  </Button>
                                  <Button>
                                      Владелец
                                  </Button>
                                  <Button>
                                      Менеджер
                                  </Button>
                              </div>
                               <div className="profile-pages-info-edit" role={"button"}>
                                   <svg
                                       fill="#B19AF2"
                                       width={30}
                                       viewBox="0 0 24 24"
                                   >
                                       <path d="M22 24H2v-4h20v4zM13.06 5.19l3.75 3.75L7.75 18H4v-3.75l9.06-9.06zm4.82 2.68-3.75-3.75 1.83-1.83c.39-.39 1.02-.39 1.41 0l2.34 2.34c.39.39.39 1.02 0 1.41l-1.83 1.83z"/>
                                   </svg>
                                   <div className="profile-pages-info-edit-text">
                                       Редактироавть
                                   </div>
                               </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    )
}
export default Profile