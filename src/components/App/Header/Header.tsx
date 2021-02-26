import React, { Fragment, useState } from "react";
import qrcodebinance from '../../../assets/images/qr-code-banance.png';
function Header() {
  const listNoti = (
    <Fragment>
      <ul className="listnoti">
        <li>
          <div className="box-noti">
            <div className="circle">
              <span></span>
            </div>
            <div className="icon-mail">
              <img width="16px" height="16px" src="https://public.bnbstatic.com/20191106/027ecdee-bbfe-4d2a-a25d-4ce90bb5631c.png" />
            </div>
            <div className="info-noti">
                <div className="title">New device has been authorized</div>
                <p>You have successfully authorized a new device or in a new location to sign into your Binance account. 
                Location：Ho Chi Minh City Viet Nam
                IP Address：115.77.151.246
                Device：Chrome V87.0.4280.141 (Windows)
                If this activity is not your own operation, please disable your account and contact us immediately.
                </p>
            </div>
            <div className="time-ago">
              <span>16 h ago</span>
            </div>
          </div>
        </li>
        <li>
          <div className="box-noti">
            <div className="circle">
              <span></span>
            </div>
            <div className="icon-mail">
              <img width="16px" height="16px" src="https://public.bnbstatic.com/20191106/027ecdee-bbfe-4d2a-a25d-4ce90bb5631c.png" />
            </div>
            <div className="info-noti">
                <div className="title">New device has been authorized</div>
                <p>You have successfully authorized a new device or in a new location to sign into your Binance account. 
                Location：Ho Chi Minh City Viet Nam
                IP Address：115.77.151.246
                Device：Chrome V87.0.4280.141 (Windows)
                If this activity is not your own operation, please disable your account and contact us immediately.
                </p>
            </div>
            <div className="time-ago">
              <span>16 h ago</span>
            </div>
          </div>
        </li>
        <li>
          <div className="box-noti">
            <div className="circle">
              <span></span>
            </div>
            <div className="icon-mail">
              <img width="16px" height="16px" src="https://public.bnbstatic.com/20191106/027ecdee-bbfe-4d2a-a25d-4ce90bb5631c.png" />
            </div>
            <div className="info-noti">
                <div className="title">New device has been authorized</div>
                <p>You have successfully authorized a new device or in a new location to sign into your Binance account. 
                Location：Ho Chi Minh City Viet Nam
                IP Address：115.77.151.246
                Device：Chrome V87.0.4280.141 (Windows)
                If this activity is not your own operation, please disable your account and contact us immediately.
                </p>
            </div>
            <div className="time-ago">
              <span>16 h ago</span>
            </div>
          </div>
        </li>
        <li>
          <div className="box-noti">
            <div className="circle">
              <span></span>
            </div>
            <div className="icon-mail">
              <img width="16px" height="16px" src="https://public.bnbstatic.com/20191106/027ecdee-bbfe-4d2a-a25d-4ce90bb5631c.png" />
            </div>
            <div className="info-noti">
                <div className="title">New device has been authorized</div>
                <p>You have successfully authorized a new device or in a new location to sign into your Binance account. 
                Location：Ho Chi Minh City Viet Nam
                IP Address：115.77.151.246
                Device：Chrome V87.0.4280.141 (Windows)
                If this activity is not your own operation, please disable your account and contact us immediately.
                </p>
            </div>
            <div className="time-ago">
              <span>16 h ago</span>
            </div>
          </div>
        </li>
      </ul>
    </Fragment>
  );
  const notiNull = (
    <div className="notinull">
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="icon-noti-null">
        <use xlinkHref="#icon-h-Notification">
          <svg id="icon-h-Notification" viewBox="0 0 1024 1024"><path d="M788.864 561.066667v-118.613334c0-142.08-102.4-261.12-238.933333-280.32V85.333333H474.026667v80.64c-136.533333 19.2-238.933333 134.4-238.933334 276.48v118.613334L170.666667 626.346667V768h682.666666v-141.653333l-64.469333-65.28z m-11.392 130.133333H246.528v-34.133333l64.426667-65.28v-149.333334c0-111.36 91.050667-207.36 201.045333-207.36s201.002667 92.16 201.002667 207.36v149.333334l64.469333 65.28v34.133333zM682.666667 853.333333H341.333333v85.333334h341.333334v-85.333334z"></path></svg>
        </use>
      </svg>
      <p>No new notifications</p>
    </div>
  );
  
  const listCoin = (
        <Fragment>
          <ul className="list-coin">
            <li>
                <div className="search">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="icon-search">
                    <use xlinkHref="#icon-search">
                      <svg id="icon-search" viewBox="0 0 1024 1024"><path d="M128 468.565333c0 164.053333 133.845333 297.898667 297.898667 297.898667 64.768 0 129.536-21.589333 177.024-60.416L792.874667 896 853.333333 835.541333l-189.952-189.952c34.56-47.488 60.416-112.256 60.416-177.024 0-82.005333-34.56-155.434667-86.314666-211.541333C585.642667 205.226667 507.946667 170.666667 425.898667 170.666667 261.845333 170.666667 128 304.512 128 468.565333zM572.714667 317.44a205.610667 205.610667 0 0 1 60.416 146.816c0 56.106667-21.589333 107.946667-60.416 146.773333a205.610667 205.610667 0 0 1-146.773334 60.458667 205.610667 205.610667 0 0 1-146.816-60.458667c-43.178667-34.56-64.768-86.314667-64.768-142.464 0-56.106667 21.589333-107.946667 60.416-146.773333 38.869333-43.178667 95.018667-64.768 151.125334-64.768 56.149333 0 107.946667 21.589333 146.773333 60.416z"></path></svg>
                    </use>
                  </svg>
                  <input type="text" placeholder="Search"/>
                  
                </div>
            </li>
            <li><div className="coin">EUR</div></li>
            <li><div className="coin">AED</div></li>
            <li><div className="coin">ARS</div></li>
            <li><div className="coin">AUD</div></li>
            <li><div className="coin">AZN</div></li>
            <li><div className="coin">BGN</div></li>
            <li><div className="coin">BOB</div></li>
            <li><div className="coin">BRL</div></li>
            <li><div className="coin">CAD</div></li>
            <li><div className="coin">CHF</div></li>
            <li><div className="coin">CLP</div></li>
            <li><div className="coin">CNY</div></li>
            <li><div className="coin">COP</div></li>
            <li><div className="coin">CZK</div></li>
            <li><div className="coin">DKK</div></li>
          </ul>
        </Fragment>
  );
  const [isListCoin, setIsListCoin] = useState(false);
  return (
    <Fragment>
      <div className="header-container">
        <header className="header-desktop">
          {/* Menu Left */}
          <a className="logo" href="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 5120 1024"
              className="css-1e2tyca"
            >
              <path
                d="M230.997333 512L116.053333 626.986667 0 512l116.010667-116.010667L230.997333 512zM512 230.997333l197.973333 197.973334 116.053334-115.968L512 0 197.973333 314.026667l116.053334 115.968L512 230.997333z m395.989333 164.992L793.002667 512l116.010666 116.010667L1024.981333 512l-116.992-116.010667zM512 793.002667l-197.973333-198.997334-116.053334 116.010667L512 1024l314.026667-314.026667-116.053334-115.968L512 793.002667z m0-165.973334l116.010667-116.053333L512 396.032 395.989333 512 512 626.986667z m1220.010667 11.946667v-1.962667c0-75.008-40.021333-113.024-105.002667-138.026666 39.978667-21.973333 73.984-58.026667 73.984-121.002667v-1.962667c0-88.021333-70.997333-145.024-185.002667-145.024h-260.992v561.024h267.008c126.976 0.981333 210.005333-51.029333 210.005334-153.002666z m-154.026667-239.957333c0 41.984-34.005333 58.965333-89.002667 58.965333h-113.962666V338.986667h121.984c52.010667 0 80.981333 20.992 80.981333 58.026666v2.005334z m31.018667 224c0 41.984-32.981333 61.013333-87.04 61.013333h-146.944v-123.050667h142.976c63.018667 0 91.008 23.04 91.008 61.013334v1.024z m381.994666 169.984V230.997333h-123.989333v561.024h123.989333v0.981334z m664.021334 0V230.997333h-122.026667v346.026667l-262.997333-346.026667h-114.005334v561.024h122.026667v-356.010666l272 356.992h104.96z m683.946666 0L3098.026667 228.010667h-113.962667l-241.024 564.992h127.018667l50.986666-125.994667h237.013334l50.986666 125.994667h130.005334z m-224.981333-235.008h-148.992l75.008-181.973334 73.984 181.973334z m814.037333 235.008V230.997333h-122.026666v346.026667l-262.997334-346.026667h-114.005333v561.024h122.026667v-356.010666l272 356.992h104.96z m636.970667-91.008l-78.976-78.976c-44.032 39.978667-83.029333 65.962667-148.010667 65.962666-96 0-162.986667-80-162.986666-176v-2.986666c0-96 67.968-174.976 162.986666-174.976 55.978667 0 100.010667 23.978667 144 62.976l78.976-91.008c-51.968-50.986667-114.986667-86.997333-220.970666-86.997334-171.989333 0-292.992 130.986667-292.992 290.005334V512c0 160.981333 122.965333 288.981333 288 288.981333 107.989333 1.024 171.989333-36.992 229.973333-98.986666z m527.018667 91.008v-109.994667h-305.024v-118.016h265.002666v-109.994667h-265.002666V340.992h301.013333V230.997333h-422.997333v561.024h427.008v0.981334z"
                p-id="2935"
              ></path>
            </svg>
          </a>
          {/* Packages */}
          <ul className="menu-items packages">
            <li>
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="package-icon"
                  fill="currentColor"
                >
                  <use xlinkHref="#icon-h-top-menu-s">
                    <svg id="icon-h-top-menu-s" viewBox="0 0 1024 1024">
                      <path d="M599.381333 424.618667H424.618667v174.762666h174.762666V424.618667z m0-253.952H424.618667v174.293333h174.762666V170.666667z m0 508.373333H424.618667V853.333333h174.762666v-174.293333zM344.96 424.618667H170.666667v174.762666h174.293333V424.618667zM853.333333 170.666667h-174.293333v174.293333H853.333333V170.666667z m0 508.373333h-174.293333V853.333333H853.333333v-174.293333z m-508.373333 0H170.666667V853.333333h174.293333v-174.293333zM853.333333 424.618667h-174.293333v174.762666H853.333333V424.618667zM344.96 170.666667H170.666667v174.293333h174.293333V170.666667z"></path>
                    </svg>
                  </use>
                </svg>
              </a>
              <ul className="sub-menu">
                <li>
                  <a href="#">
                    <div className="groups">
                      <div className="item">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon-package"
                          fill="currentColor"
                        >
                          <use xlinkHref="#icon-h-exchange2">
                            <svg id="icon-h-exchange2" viewBox="0 0 1024 1024">
                              <path
                                d="M0 0m180.705882 0l662.588236 0q180.705882 0 180.705882 180.705882l0 662.588236q0 180.705882-180.705882 180.705882l-662.588236 0q-180.705882 0-180.705882-180.705882l0-662.588236q0-180.705882 180.705882-180.705882Z"
                                fill="#F0B90B"
                                opacity=".1"
                              ></path>
                              <path
                                d="M512 319.216941L375.115294 463.811765 295.152941 379.422118l136.975059-144.534589L512 150.588235l79.962353 84.329412 136.884706 144.504471-79.872 84.389647L512 319.216941z m361.411765 192.722824l-81.618824-81.618824-81.618823 81.618824 81.618823 81.618823 81.618824-81.618823z m-641.204706-81.618824l81.618823 81.618824-81.618823 81.618823L150.588235 511.909647l81.618824-81.618823z m279.792941 274.371765l136.975059-144.504471 79.872 84.329412-136.884706 144.564706L512 873.411765l-79.872-84.329412L295.152941 644.517647l79.962353-84.329412L512 704.692706z m0-274.371765l81.618824 81.618824-81.618824 81.618823-81.618824-81.618823 81.618824-81.618824z"
                                fill="#F0B90B"
                              ></path>
                            </svg>
                          </use>
                        </svg>
                      </div>
                      <div className="item-small">
                        <div>Exchange</div>
                        <span>Bank tranfer and 100+ options</span>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div className="groups">
                      <div className="item">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon-package"
                          fill="currentColor"
                        >
                          <use xlinkHref="#icon-h-academy1">
                            <svg id="icon-h-academy1" viewBox="0 0 1024 1024">
                              <path
                                d="M0 0m180.705882 0l662.588236 0q180.705882 0 180.705882 180.705882l0 662.588236q0 180.705882-180.705882 180.705882l-662.588236 0q-180.705882 0-180.705882-180.705882l0-662.588236q0-180.705882 180.705882-180.705882Z"
                                fill="#F0B90B"
                                opacity=".1"
                              ></path>
                              <path
                                d="M873.411765 404.901647L538.021647 210.823529l-123.060706 71.378824 199.348706 116.043294-76.288 44.333177-199.077647-116.525177-136.312471 78.848 335.390118 193.957647L873.411765 404.931765zM150.588235 591.872L227.207529 668.611765l76.619295-76.739765-76.619295-76.739765L150.588235 591.872z m240.941177 121.584941V596.329412l156.611764 99.719529 156.611765-99.719529v117.127529L548.141176 813.176471 391.529412 713.456941z"
                                fill="#F0B90A"
                              ></path>
                            </svg>
                          </use>
                        </svg>
                      </div>
                      <div className="item-small">
                        <div>Academy</div>
                        <span>Blockchain and crypto education</span>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div className="groups">
                      <div className="item">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon-package"
                          fill="currentColor"
                        >
                          <use xlinkHref="#icon-broker">
                            <svg id="icon-broker" viewBox="0 0 1024 1024">
                              <path
                                d="M0 0m180.705882 0l662.588236 0q180.705882 0 180.705882 180.705882l0 662.588236q0 180.705882-180.705882 180.705882l-662.588236 0q-180.705882 0-180.705882-180.705882l0-662.588236q0-180.705882 180.705882-180.705882Z"
                                fill="#F0B90B"
                                opacity=".1"
                              ></path>
                              <path
                                d="M227.659294 227.629176h406.196706v406.226824H227.689412V227.629176z m81.227294 81.257412v243.712h243.742118v-243.712h-243.742118z"
                                fill="#F0B90B"
                              ></path>
                              <path
                                d="M390.144 390.144h406.226824V796.310588H390.144V390.144z m81.227294 81.227294v243.742118h243.742118V471.341176h-243.742118z"
                                fill="#F0B90B"
                              ></path>
                              <path
                                d="M698.277647 268.257882L755.742118 210.823529 813.176471 268.257882l-57.434353 57.464471-57.464471-57.464471zM210.823529 755.712l57.434353-57.434353 57.464471 57.434353L268.257882 813.176471 210.823529 755.681882z"
                                fill="#F0B90B"
                              ></path>
                            </svg>
                          </use>
                        </svg>
                      </div>
                      <div className="item-small">
                        <div>Broker</div>
                        <span>Trading terminal solutions</span>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div className="groups">
                      <div className="item">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon-package"
                          fill="currentColor"
                        >
                          <use xlinkHref="#icon-h-bcf1">
                            <svg id="icon-h-bcf1" viewBox="0 0 1024 1024">
                              <path
                                d="M0 0m180.705882 0l662.588236 0q180.705882 0 180.705882 180.705882l0 662.588236q0 180.705882-180.705882 180.705882l-662.588236 0q-180.705882 0-180.705882-180.705882l0-662.588236q0-180.705882 180.705882-180.705882Z"
                                fill="#F0B90B"
                                opacity=".1"
                              ></path>
                              <path
                                d="M511.939765 332.378353l121.283764-121.434353L873.411765 451.282824 511.457882 813.176471 150.588235 451.282824 390.776471 210.823529l121.163294 121.554824zM499.712 644.517647l0.602353-0.602353 156.250353-153.449412-64.060235-62.795294-92.16 90.50353-0.632471 0.602353-92.310588-90.624-64.060236 62.795294 156.370824 153.569882z"
                                fill="#F0B90B"
                              ></path>
                            </svg>
                          </use>
                        </svg>
                      </div>
                      <div className="item-small">
                        <div>Charity</div>
                        <span>Blockchain charity foundation</span>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div className="groups">
                      <div className="item">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon-package"
                          fill="currentColor"
                        >
                          <use xlinkHref="#icon-h-binancecloud">
                            <svg
                              id="icon-h-binancecloud"
                              viewBox="0 0 1024 1024"
                            >
                              <path
                                d="M0 0m189.620706 0l644.758588 0q189.620706 0 189.620706 189.620706l0 644.758588q0 189.620706-189.620706 189.620706l-644.758588 0q-189.620706 0-189.620706-189.620706l0-644.758588q0-189.620706 189.620706-189.620706Z"
                                fill="#F0B90B"
                                fill-opacity=".1"
                              ></path>
                              <path
                                d="M326.806588 400.745412l123.964236-125.83153 132.367058 0.030118 123.482353 125.801412h69.51153l97.40047 106.526117v155.01553L776.131765 768H256.060235L150.618353 662.287059v-155.01553l105.441882-106.526117h70.776471z m194.680471 23.732706l-154.292706 156.912941 54.784 56.199529 99.508706-101.104941L620.423529 637.590588l55.597177-56.199529-154.533647-156.912941z"
                                fill="#F0B90B"
                              ></path>
                            </svg>
                          </use>
                        </svg>
                      </div>
                      <div className="item-small">
                        <div>Cloud</div>
                        <span>Enterprise exchange solutions</span>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div className="groups">
                      <div className="item">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon-package"
                          fill="currentColor"
                        >
                          <use xlinkHref="#icon-DEX">
                            <svg id="icon-DEX" viewBox="0 0 1024 1024">
                              <path
                                d="M0 0m180.705882 0l662.588236 0q180.705882 0 180.705882 180.705882l0 662.588236q0 180.705882-180.705882 180.705882l-662.588236 0q-180.705882 0-180.705882-180.705882l0-662.588236q0-180.705882 180.705882-180.705882Z"
                                fill="#F0B90B"
                                opacity=".1"
                              ></path>
                              <path
                                d="M278.768941 512.030118l0.210824 139.866353 116.585411 69.933176v81.618824L210.823529 693.007059v-221.786353l67.945412 40.839529z m0-139.926589v81.618824L210.823529 412.882824v-81.618824l67.945412-40.719059 67.945412 40.719059-67.945412 40.839529z m165.195294-40.839529l68.005647-40.719059 67.885177 40.719059-67.97553 40.839529-67.915294-40.839529z m-116.34447 291.478588v-81.618823l67.945411 40.809411v81.618824l-67.945411-40.809412z m116.34447 128.240941l67.915294 40.83953 67.97553-40.83953v81.618824L511.879529 873.411765l-67.915294-40.809412v-81.618824z m233.261177-419.719529l67.915294-40.719059 67.975529 40.719059v81.648941l-67.975529 40.809412v-81.648941L677.225412 331.294118z m67.915294 320.662588l0.090353-139.89647L813.176471 471.220706v221.786353l-184.621177 110.441412v-81.618824l116.585412-69.933176v0.030117z m-48.549647-29.214117l-67.945412 40.839529v-81.618824l67.945412-40.809411v81.618823z m0-221.455059l0.12047 81.618823-116.615529 69.872941v140.257883l-67.915294 40.809412-67.97553-40.809412v-140.227765l-116.555294-69.872941v-81.679059l67.945412-40.779294 116.374588 69.963294 116.705883-69.963294 67.915294 40.809412zM327.649882 261.421176L511.939765 150.588235l184.621176 110.802824-67.945412 40.779294-116.675764-69.963294-116.374589 69.993412-67.975529-40.83953h0.060235z"
                                fill="#F0B90B"
                              ></path>
                            </svg>
                          </use>
                        </svg>
                      </div>
                      <div className="item-small">
                        <div>DEX</div>
                        <span>
                          Fast and secure decentralized digital asset exchange
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div className="groups">
                      <div className="item">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon-package"
                          fill="currentColor"
                        >
                          <use xlinkHref="#icon-h-labs1">
                            <svg id="icon-h-labs1" viewBox="0 0 1024 1024">
                              <path
                                d="M0 0m180.705882 0l662.588236 0q180.705882 0 180.705882 180.705882l0 662.588236q0 180.705882-180.705882 180.705882l-662.588236 0q-180.705882 0-180.705882-180.705882l0-662.588236q0-180.705882 180.705882-180.705882Z"
                                fill="#F0B90B"
                                opacity=".1"
                              ></path>
                              <path
                                d="M587.986824 239.224471L542.117647 194.831059 587.986824 150.588235l45.839058 44.393412-45.839058 44.242824zM750.531765 536.094118l-80.715294-78.546824 80.715294-78.095059 80.685176 78.095059-80.715294 78.546824zM252.506353 387.373176L191.216941 329.185882 252.506353 271.058824l61.289412 58.127058-61.289412 58.187294z m362.014118-20.660705H583.68v157.515294L831.247059 761.072941 712.884706 873.411765H299.068235L180.705882 761.072941l249.344-236.875294v-157.515294h-30.780235v-52.013177h215.220706v52.043295z m-27.497412 422.881882l56.32-53.308235-137.456941-130.258824-137.426824 130.831059 56.32 53.458823 81.136941-76.980705 81.106824 76.257882z"
                                fill="#F0B90B"
                              ></path>
                            </svg>
                          </use>
                        </svg>
                      </div>
                      <div className="item-small">
                        <div>Labs</div>
                        <span>Incubator for top blockchain projects</span>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div className="groups">
                      <div className="item">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon-package"
                          fill="currentColor"
                        >
                          <use xlinkHref="#icon-h-launchpad">
                            <svg id="icon-h-launchpad" viewBox="0 0 1024 1024">
                              <path
                                d="M0 0m180.705882 0l662.588236 0q180.705882 0 180.705882 180.705882l0 662.588236q0 180.705882-180.705882 180.705882l-662.588236 0q-180.705882 0-180.705882-180.705882l0-662.588236q0-180.705882 180.705882-180.705882Z"
                                fill="#F0B90B"
                                opacity=".1"
                              ></path>
                              <path
                                d="M353.28 640.421647l55.898353 55.898353v93.424941l-195.855059 46.531765 46.08-195.855059h93.876706zM567.476706 213.323294l-102.821647 103.273412h-128l-110.531765 110.501647 333.673412 333.643294 63.548235 64 0.873412 0.421647 110.08-110.501647v-128.421647l102.821647-103.243294V213.323294h-269.643294z m166.821647 292.713412h-78.095059V394.24h-111.344941v-77.643294h189.44v189.44z"
                                fill="#F0B90B"
                              ></path>
                            </svg>
                          </use>
                        </svg>
                      </div>
                      <div className="item-small">
                        <div>Launchpad</div>
                        <span>Token Launch Platform</span>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div className="groups">
                      <div className="item">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon-package"
                          fill="currentColor"
                        >
                          <use xlinkHref="#icon-h-research1">
                            <svg id="icon-h-research1" viewBox="0 0 1024 1024">
                              <path
                                d="M0 0m180.705882 0l662.588236 0q180.705882 0 180.705882 180.705882l0 662.588236q0 180.705882-180.705882 180.705882l-662.588236 0q-180.705882 0-180.705882-180.705882l0-662.588236q0-180.705882 180.705882-180.705882Z"
                                fill="#F0B90B"
                                opacity=".1"
                              ></path>
                              <path
                                d="M536.033882 120.470588h-72.884706v93.665883h72.884706V120.470588zM241.423059 513.415529v16.655059H150.588235v-92.79247h90.834824v76.137411z m607.894588 0v16.655059h-88.244706v-92.79247h88.244706v76.137411zM337.618824 264.463059l5.722352-5.722353L277.383529 192.752941 222.870588 247.265882l6.53553 6.53553-2.469647 2.620235 62.373647 66.258824 51.561411-54.753883-3.282823-3.463529z m383.186823-62.85553l-62.403765 66.258824 51.561412 54.693647 62.403765-66.228706-51.561412-54.723765z m-77.492706 125.138824L501.248 265.035294l-142.034824 61.711059-59.090823 148.419765 59.090823 148.389647 142.034824 61.741176 142.064941-61.741176 59.090824-148.389647-59.090824-148.419765zM580.517647 505.976471l-108.784941-113.664 51.591529-53.910589 108.784941 113.664-51.591529 53.910589zM501.248 891.482353l99.087059-45.688471v-100.773647h-198.144v100.773647l99.087059 45.688471z"
                                fill="#F0B90B"
                              ></path>
                            </svg>
                          </use>
                        </svg>
                      </div>
                      <div className="item-small">
                        <div>Research</div>
                        <span>Institutional-grade analysis and reports</span>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div className="groups">
                      <div className="item">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon-package"
                          fill="currentColor"
                        >
                          <use xlinkHref="#icon-h-trust-wallet1">
                            <svg
                              id="icon-h-trust-wallet1"
                              viewBox="0 0 1024 1024"
                            >
                              <path
                                d="M0 0m180.705882 0l662.588236 0q180.705882 0 180.705882 180.705882l0 662.588236q0 180.705882-180.705882 180.705882l-662.588236 0q-180.705882 0-180.705882-180.705882l0-662.588236q0-180.705882 180.705882-180.705882Z"
                                fill="#3375BB"
                                opacity=".1"
                              ></path>
                              <path
                                d="M839.198118 228.352l-23.461647 410.714353-128.602353 103.664941L524.980706 873.411765l-162.093177-130.710589-128.63247-103.604705L210.823529 228.321882l150.287059 1.024 1.656471-1.024L526.034824 150.588235l161.069176 77.763765 1.626353 1.024 150.467765-1.024z"
                                fill="#3375BB"
                              ></path>
                            </svg>
                          </use>
                        </svg>
                      </div>
                      <div className="item-small">
                        <div>Trust Wallet</div>
                        <span>Binance's official crypto wallet</span>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </li>
          </ul>

          <ul className="menu-items">
            <li>
              <a href="#">
                Buy Crypto <span className="pay">VND</span>
                <i className="fas fa-caret-down"></i>
              </a>
              <ul className="sub-menu">
                <li>
                  <div className="pay-with">
                    <div className="left">
                      <span>Pay with</span>
                    </div>
                    <div className="right">
                        <div className="select-coin">
                          <button className="btn-coin" onClick={() => setIsListCoin(!isListCoin)}>
                            EUR
                            <i className="fas fa-caret-right"></i>
                          </button>
                          { isListCoin ? listCoin : null}
                        </div>
                    </div>
                  </div>
                </li>
                <li>
                  <a href="#">
                    <div className="groups">
                      <div className="item">
                        <div className="square"></div>
                        <span>P2P Trading</span>
                      </div>
                      <div className="item-small">
                        <div className="squaretransparent"></div>
                        <span>Bank tranfer and 100+ options</span>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div className="groups">
                      <div className="item">
                        <div className="square"></div>
                        <span>Credit/Debit Card</span>
                      </div>
                      <div className="item-small">
                        <div className="squaretransparent"></div>
                        <span>Visa, Mastercard</span>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div className="groups">
                      <div className="item">
                        <div className="square"></div>
                        <span>Third-party Payment</span>
                      </div>
                      <div className="item-small">
                        <div className="squaretransparent"></div>
                        <span>Simplex</span>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </li>
          </ul>

          <ul className="menu-items">
            <li>
              <a href="">Markets</a>
            </li>
          </ul>

          <ul className="menu-items">
            <li>
              <a href="#">
                Trade
                <i className="fas fa-caret-down"></i>
              </a>
              <ul className="sub-menu">
                <li>
                  <a href="#">
                    <div className="groups">
                      <div className="item">
                        <div className="square"></div>
                        <span>P2P Trading</span>
                      </div>
                      <div className="item-small">
                        <div className="squaretransparent"></div>
                        <span>Bank tranfer and 100+ options</span>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div className="groups">
                      <div className="item">
                        <div className="square"></div>
                        <span>P2P Trading</span>
                      </div>
                      <div className="item-small">
                        <div className="squaretransparent"></div>
                        <span>Bank tranfer and 100+ options</span>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div className="groups">
                      <div className="item">
                        <div className="square"></div>
                        <span>P2P Trading</span>
                      </div>
                      <div className="item-small">
                        <div className="squaretransparent"></div>
                        <span>Bank tranfer and 100+ options</span>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div className="groups">
                      <div className="item">
                        <div className="square"></div>
                        <span>P2P Trading</span>
                      </div>
                      <div className="item-small">
                        <div className="squaretransparent"></div>
                        <span>Bank tranfer and 100+ options</span>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </li>
          </ul>

          <ul className="menu-items">
            <li>
              <a href="#">
                Derivaties
                <i className="fas fa-caret-down"></i>
              </a>
              <ul className="sub-menu">
                <li>
                  <a href="#">
                    <div className="groups">
                      <div className="item">
                        <div className="square"></div>
                        <span>P2P Trading</span>
                      </div>
                      <div className="item-small">
                        <div className="squaretransparent"></div>
                        <span>Bank tranfer and 100+ options</span>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div className="groups">
                      <div className="item">
                        <div className="square"></div>
                        <span>P2P Trading</span>
                      </div>
                      <div className="item-small">
                        <div className="squaretransparent"></div>
                        <span>Bank tranfer and 100+ options</span>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div className="groups">
                      <div className="item">
                        <div className="square"></div>
                        <span>P2P Trading</span>
                      </div>
                      <div className="item-small">
                        <div className="squaretransparent"></div>
                        <span>Bank tranfer and 100+ options</span>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div className="groups">
                      <div className="item">
                        <div className="square"></div>
                        <span>P2P Trading</span>
                      </div>
                      <div className="item-small">
                        <div className="squaretransparent"></div>
                        <span>Bank tranfer and 100+ options</span>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </li>
          </ul>

          <ul className="menu-items">
            <li>
              <a href="#">
                Finance
                <i className="fas fa-caret-down"></i>
              </a>
              <ul className="sub-menu">
                <li>
                  <a href="#">
                    <div className="groups">
                      <div className="item">
                        <div className="square"></div>
                        <span>P2P Trading</span>
                      </div>
                      <div className="item-small">
                        <div className="squaretransparent"></div>
                        <span>Bank tranfer and 100+ options</span>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div className="groups">
                      <div className="item">
                        <div className="square"></div>
                        <span>P2P Trading</span>
                      </div>
                      <div className="item-small">
                        <div className="squaretransparent"></div>
                        <span>Bank tranfer and 100+ options</span>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div className="groups">
                      <div className="item">
                        <div className="square"></div>
                        <span>P2P Trading</span>
                      </div>
                      <div className="item-small">
                        <div className="squaretransparent"></div>
                        <span>Bank tranfer and 100+ options</span>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div className="groups">
                      <div className="item">
                        <div className="square"></div>
                        <span>P2P Trading</span>
                      </div>
                      <div className="item-small">
                        <div className="squaretransparent"></div>
                        <span>Bank tranfer and 100+ options</span>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </li>
          </ul>

          <div className="space"></div>
          {/* Menu Right */}
          {/* Wallet */}
          <ul className="menu-items wallet">
            <li>
              <a href="#">
                Wallet
                <i className="fas fa-caret-down"></i>
              </a>
              <ul className="sub-menu">
                <li>
                  <a href="#">
                    <div className="groups">
                      <div className="item">
                        <span>Overview</span>
                      </div>
                      <div className="item-small"></div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div className="groups">
                      <div className="item">
                        <span>Fia and Spot</span>
                      </div>
                      <div className="item-small">
                        <span>(Deposit & Withdraw)</span>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div className="groups">
                      <div className="item">
                        <span>Margin</span>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div className="groups">
                      <div className="item">
                        <span>Futures</span>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div className="groups">
                      <div className="item">
                        <span>P2P</span>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div className="groups">
                      <div className="item">
                        <span>Earn</span>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div className="groups">
                      <div className="item">
                        <span>Pool</span>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div className="groups">
                      <div className="item">
                        <span>Card</span>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div className="groups">
                      <div className="item">
                        <span>Vanilla Options</span>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          {/* Orders */}
          <ul className="menu-items orders">
            <li>
              <a href="#">
                Orders
                <i className="fas fa-caret-down"></i>
              </a>
              <ul className="sub-menu">
                <li>
                  <a href="#">
                    <div className="groups">
                      <div className="item">
                        <span>Spot Order</span>
                      </div>
                      <div className="item-small"></div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div className="groups">
                      <div className="item">
                        <span>Margin Order</span>
                      </div>
                      <div className="item-small"></div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div className="groups">
                      <div className="item">
                        <span>P2P Order</span>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div className="groups">
                      <div className="item">
                        <span>Dual Currency Order</span>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div className="groups">
                      <div className="item">
                        <span>Earn History</span>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div className="groups">
                      <div className="item">
                        <span>Buy Crypto History</span>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div className="groups">
                      <div className="item">
                        <span>Loan History</span>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div className="groups">
                      <div className="item">
                        <span>Convert History</span>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div className="groups">
                      <div className="item">
                        <span>Launchpad History</span>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </li>
          </ul>

          {/* My Account */}
          <ul className="menu-items user-box">
            <li>
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="usericon"
                  fill="currentColor"
                >
                  <use xlinkHref="#icon-h-myaccount">
                    <svg id="icon-h-myaccount" viewBox="0 0 1024 1024">
                      <path d="M512 96c213.344 0 416 202.656 416 416s-202.656 416-416 416C298.688 928 96 725.344 96 512S298.688 96 512 96z m0-53.344A467.968 467.968 0 0 0 42.688 512 467.968 467.968 0 0 0 512 981.344 467.968 467.968 0 0 0 981.344 512 467.968 467.968 0 0 0 512 42.656z"></path>
                      <path d="M512 469.536c61.216 0 110.88-47.808 110.88-106.784C622.88 303.808 573.216 256 512 256c-61.248 0-110.88 47.808-110.88 106.752 0 58.976 49.632 106.784 110.88 106.784zM610.848 512.256H413.12c-69.152 0-124.8 53.536-125.152 120.128v97.024h448v-97.024c-0.384-66.56-56-120.16-125.152-120.16z m49.984 144.768h-297.664v-24.64c0.384-26.4 22.56-47.744 49.984-47.744h197.696c27.424 0 49.6 21.344 49.984 47.744v24.64z"></path>
                    </svg>
                  </use>
                </svg>
              </a>
              <ul className="sub-menu">
                <li>
                  <a href="#">
                    <div className="information">
                      <div className="email">ba**@gmail.com</div>
                      <div className="rank">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon-myaccount"
                          fill="currentColor"
                        >
                          <use xlinkHref="#icon-h-vip">
                            <svg id="icon-h-vip" viewBox="0 0 1024 1024">
                              <path d="M767.424 192H254.336L0 446.72 511.424 960 1024 446.72 767.424 192zM158.72 446.72l142.336-142.528h419.712l144.064 143.04-353.28 353.472L158.592 446.72z"></path>
                            </svg>
                          </use>
                        </svg>
                        <span className="name-rank">VIP 0</span>
                        <span className="verify">Unverified</span>
                      </div>
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="mirror"
                      fill="currentColor"
                    >
                      <use xlinkHref="#icon-h-dropdown-right">
                        <svg id="icon-h-dropdown-right" viewBox="0 0 1024 1024">
                          <path d="M564.8 512L252.8 828.8 320 896l384-384-384-384-67.2 67.2L564.8 512z"></path>
                        </svg>
                      </use>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div className="groups">
                      <div className="item">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon-user-box"
                          fill="currentColor"
                        >
                          <use xlinkHref="#icon-h-account-security">
                            <svg
                              id="icon-h-account-security"
                              viewBox="0 0 1024 1024"
                            >
                              <path d="M170.666667 213.333333h682.666666v408.746667l-341.333333 195.072-341.333333-195.072V213.333333z m85.333333 85.333334v273.92l256 146.261333 256-146.261333V298.666667H256z"></path>
                            </svg>
                          </use>
                        </svg>
                        Security
                      </div>
                      
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div className="groups">
                      <div className="item">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon-user-box" fill="currentColor">
                          <use xlinkHref="#icon-h-IdentityVeritication">
                            <svg id="icon-h-IdentityVeritication" viewBox="0 0 1024 1024"><path d="M743.850667 571.306667h-167.509334v78.848h167.509334V571.306667zM743.850667 413.653333h-167.509334v78.848h167.509334V413.653333zM416.426667 393.941333c35.114667 0 62.421333 27.605333 62.421333 63.061334 0 35.498667-27.306667 59.136-62.421333 63.061333-35.114667 3.968-62.421333-27.562667-62.421334-63.061333 0-35.456 27.306667-63.061333 62.421334-63.061334z m85.802666 256.213334H326.698667V571.306667h175.530666v78.848z"></path><path d="M170.666667 256v543.914667h725.333333V256H170.666667z m651.221333 465.066667H248.704V334.890667H817.92V721.066667h3.925333z"></path></svg>
                          </use>
                        </svg>
                        Identification
                      </div>
                      
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div className="groups">
                      <div className="item">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon-user-box" fill="currentColor">
                          <use xlinkHref="#icon-h-api-management">
                            <svg id="icon-h-api-management" viewBox="0 0 1024 1024"><path d="M725.546667 469.333333V384h-128V298.666667h-154.88c-101.12 0-188.586667 71.253333-208.64 170.666666h-106.24v85.333334h106.24c20.053333 99.413333 107.52 170.666667 208.64 170.666666h154.88v-85.333333h128v-85.333333h-128v-85.333334h128z m-213.333334 170.666667h-69.546666c-70.826667 0-128-57.173333-128-128s57.173333-128 128-128h69.546666v256zM896.213333 298.666667h-85.333333v426.666666h85.333333V298.666667z"></path></svg>
                          </use>
                        </svg>
                        API Management
                      </div>
                      
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div className="groups">
                      <div className="item">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon-user-box" fill="currentColor">
                          <use xlinkHref="#icon-h-coupons">
                            <svg id="icon-h-coupons" viewBox="0 0 1024 1024"><path d="M896 810.666667H128v-256h42.666667c21.333333 0 42.666667-17.066667 42.666666-42.666667s-17.066667-42.666667-42.666666-42.666667H128V213.333333h768v256h-42.666667c-21.333333 0-42.666667 17.066667-42.666666 42.666667s17.066667 42.666667 42.666666 42.666667h42.666667v256zM213.333333 725.333333h597.333334v-93.866666c-51.2-17.066667-85.333333-64-85.333334-119.466667 0-55.466667 34.133333-102.4 85.333334-119.466667V298.666667H213.333333v93.866666c51.2 17.066667 85.333333 64 85.333334 119.466667 0 55.466667-34.133333 102.4-85.333334 119.466667V725.333333z"></path><path d="M640 384h-85.333333v85.333333h85.333333V384zM640 554.666667h-85.333333v85.333333h85.333333v-85.333333z"></path></svg>
                          </use>
                        </svg>
                        Reward Center
                      </div>
                      
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div className="groups">
                      <div className="item">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon-user-box" fill="currentColor">
                          <use xlinkHref="#icon-task-s24">
                            <svg id="icon-task-s24" viewBox="0 0 1024 1024"><path d="M554.666667 128V42.666667h-85.333334v85.333333H341.333333v85.333333h341.333334V128h-128zM256 853.333333V128H170.666667v810.666667h682.666666V128h-85.333333v725.333333H256z m170.666667-512H341.333333v85.333334h85.333334V341.333333z m-85.333334 170.666667h85.333334v85.333333H341.333333v-85.333333z m341.333334-170.666667h-170.666667v85.333334h170.666667V341.333333z m-170.666667 170.666667h170.666667v85.333333h-170.666667v-85.333333z"></path></svg>
                          </use>
                        </svg>
                        Task Center
                      </div>
                      
                    </div>
                  </a>
                </li>
                
                <li>
                  <a href="#">
                    <div className="groups">
                      <div className="item">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon-user-box" fill="currentColor">
                          <use xlinkHref="#icon-h-referral1">
                            <svg id="icon-h-referral1" viewBox="0 0 1024 1024"><path d="M791.637333 567.850667H703.573333v-100.096h-104.362666V382.976h104.362666V282.453333h88.064v100.522667H896v84.778667h-104.362667v100.096zM390.442667 463.530667c71.765333 0 129.92-56.021333 129.92-125.098667C520.362667 269.312 462.208 213.333333 390.442667 213.333333 318.72 213.333333 260.565333 269.354667 260.565333 338.432c0 69.12 58.154667 125.098667 129.877334 125.098667zM506.282667 513.578667h-231.68c-80.981333 0-146.176 62.72-146.602667 140.8V768h524.928v-113.664c-0.426667-77.994667-65.621333-140.8-146.645333-140.8z m58.581333 169.6H216.021333v-28.842667c0.426667-30.933333 26.453333-55.978667 58.581334-55.978667h231.637333c32.128 0 58.112 25.045333 58.581333 55.978667v28.842667z"></path></svg>
                          </use>
                        </svg>
                        Referal
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon-user-bonus" fill="currentColor">
                          <use xlinkHref="#icon-h-Earnbonus">
                            <svg id="icon-h-Earnbonus" viewBox="0 0 4608 1024"><path d="M384 0a192 192 0 0 0-192 192v128L0 510.72 192 704v128a192 192 0 0 0 192 192h4032a192 192 0 0 0 192-192V192a192 192 0 0 0-192-192H384z" fill="#F0B90B"></path><path d="M793.344 824.32v-76.8H536.832V590.848h232.704v-76.8H536.832V365.056h256.512v-76.8H450.048v536.064h343.296zM1238.592 824.32v-68.352h-42.24V555.52c0-89.088-57.6-139.776-160.512-139.776-77.568 0-124.416 33.024-150.528 77.568l49.92 45.312c19.968-31.488 48.384-54.528 95.232-54.528 56.064 0 82.176 28.416 82.176 76.8v33.792h-72.192c-111.36 0-170.496 40.704-170.496 119.808 0 72.192 46.848 119.04 129.024 119.04 58.368 0 101.376-26.112 116.736-76.032h3.84c5.376 39.168 28.416 66.816 72.192 66.816h46.848z m-215.808-54.528c-41.472 0-67.584-18.432-67.584-53.76v-13.824c0-34.56 28.416-53.76 86.784-53.76h70.656v57.6c0 39.168-38.4 63.744-89.856 63.744zM1404.352 824.32V569.344c0-41.472 36.864-63.744 102.912-63.744h33.024V424.96h-22.272c-63.744 0-98.304 36.096-109.824 76.8h-3.84v-76.8h-83.712v399.36h83.712zM1698.368 824.32V557.056c0-46.848 43.008-69.12 86.784-69.12 51.456 0 75.264 31.488 75.264 93.696v242.688h83.712V570.88c0-98.304-48.384-155.136-129.792-155.136-61.44 0-95.232 32.256-112.128 75.264h-3.84V424.96h-83.712v399.36h83.712zM2241.664 824.32h83.712v-66.048h3.84c16.896 46.848 59.136 75.264 112.128 75.264 100.608 0 158.976-77.568 158.976-208.896 0-131.328-58.368-208.896-158.976-208.896-52.992 0-95.232 27.648-112.128 75.264h-3.84V256h-83.712v568.32z m174.336-62.976c-50.688 0-90.624-27.648-90.624-68.352V556.288c0-40.704 39.936-68.352 90.624-68.352 57.6 0 96 40.704 96 102.144v69.12c0 61.44-38.4 102.144-96 102.144zM2852.8 833.536c111.36 0 183.552-81.408 183.552-208.896 0-127.488-72.192-208.896-183.552-208.896s-183.552 81.408-183.552 208.896c0 127.488 72.192 208.896 183.552 208.896z m0-69.12c-56.832 0-95.232-35.328-95.232-105.984V590.848c0-70.656 38.4-105.984 95.232-105.984s95.232 35.328 95.232 105.984v67.584c0 70.656-38.4 105.984-95.232 105.984zM3213.376 824.32V557.056c0-46.848 43.008-69.12 86.784-69.12 51.456 0 75.264 31.488 75.264 93.696v242.688h83.712V570.88c0-98.304-48.384-155.136-129.792-155.136-61.44 0-95.232 32.256-112.128 75.264h-3.84V424.96H3129.6v399.36h83.712zM3817.088 824.32h83.712V424.96h-83.712v267.264c0 46.848-42.24 69.12-85.248 69.12-51.456 0-76.8-32.256-76.8-92.928V424.96h-83.712v254.208c0 98.304 48.384 154.368 130.56 154.368 66.048 0 97.536-36.096 112.128-75.264h3.072v66.048zM4147.392 833.536c96 0 158.208-51.456 158.208-128.256 0-64.512-39.168-102.912-126.72-115.968l-36.864-4.608c-42.24-6.912-61.44-20.736-61.44-51.456 0-29.952 21.504-49.92 67.584-49.92 43.008 0 76.8 20.736 97.536 45.312l51.456-49.152c-36.096-39.936-76.8-63.744-148.992-63.744-87.552 0-148.224 45.312-148.224 122.88 0 73.728 49.92 109.056 131.328 119.04l36.864 4.608c41.472 5.376 56.832 24.576 56.832 49.92 0 33.792-24.576 53.76-72.96 53.76-47.616 0-83.712-21.504-112.896-56.832l-53.76 49.152c37.632 46.848 86.784 75.264 162.048 75.264z" fill="#212833"></path></svg>
                          </use>
                        </svg>
                      </div>
                      
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div className="groups">
                      <div className="item">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon-user-box" fill="currentColor">
                          <use xlinkHref="#icon-new-logout">
                            <svg id="icon-new-logout" viewBox="0 0 1024 1024"><path d="M535.893333 170.666667h-89.216v361.173333h89.173334V170.666667z"></path><path d="M490.837333 853.333333C313.344 852.906667 170.24 708.437333 170.666667 530.517333a321.194667 321.194667 0 0 1 93.653333-225.621333L327.168 368.213333a231.296 231.296 0 0 0 0.426667 327.722667 231.296 231.296 0 0 0 327.765333-0.426667 231.68 231.68 0 0 0 0-327.765333l62.890667-63.317333a321.706667 321.706667 0 0 1-0.896 454.826666A319.146667 319.146667 0 0 1 490.794667 853.333333z"></path></svg>
                          </use>
                        </svg>
                        Log Out
                      </div>
                      
                    </div>
                  </a>
                </li>
              </ul>
            </li>
          </ul>

          {/* Notification */}
          <ul className="menu-items user-notification">
            <li>
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="noti-icon"
                  fill="currentColor"
                >
                  <use xlinkHref="#icon-h-Notification">
                    <svg id="icon-h-Notification" viewBox="0 0 1024 1024">
                      <path d="M788.864 561.066667v-118.613334c0-142.08-102.4-261.12-238.933333-280.32V85.333333H474.026667v80.64c-136.533333 19.2-238.933333 134.4-238.933334 276.48v118.613334L170.666667 626.346667V768h682.666666v-141.653333l-64.469333-65.28z m-11.392 130.133333H246.528v-34.133333l64.426667-65.28v-149.333334c0-111.36 91.050667-207.36 201.045333-207.36s201.002667 92.16 201.002667 207.36v149.333334l64.469333 65.28v34.133333zM682.666667 853.333333H341.333333v85.333334h341.333334v-85.333334z"></path>
                    </svg>
                  </use>
                </svg>
                <div className="quantity">1</div>
              </a>
              <ul className="sub-menu">
                <li>
                  <div className="box-notification">
                    <div className="header-noti">
                       <div className="left">
                        <span>0</span> pending notifications 
                        <div className="box-icon-clear-noti">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="icon-clear-noti">
                            <use xlinkHref="#icon-h-Markallasread">
                              <svg id="icon-h-Markallasread" viewBox="0 0 1024 1024"><path d="M769.22302895 133.87054901a29.71569494 29.71569494 0 0 1 41.70139242 0v0.11046684a28.83195638 28.83195638 0 0 1 0 41.14905695l-514.55652473 535.26913709-0.05523277 0.16570089a29.49475998 29.49475998 0 0 1-20.87831325 8.45074584 29.38429315 29.38429315 0 0 1-20.87831323-8.45074584l-0.11046814-0.22093496-175.6429527-173.43360693a28.88719045 28.88719045 0 0 1 0-41.14905698 29.77092771 29.77092771 0 0 1 41.64615966 0l154.98557441 152.99716364 493.78867833-514.88792654z m163.76772075 221.15546581h-233.52779913l64.01577969-60.64652896h169.56725351c16.90149168 0 30.65466627 13.5874737 30.65466627 30.37849853a30.54419945 30.54419945 0 0 1-30.70990034 30.26803043z m-317.04105211 121.34829194h316.98581933c16.01775312 0.66280359 28.83195638 13.31130596 29.49476 29.10812412a30.54419945 30.54419945 0 0 1-29.49476 31.59363889h-380.94636625l63.96054692-60.70176301zM468.36542957 658.36912767h464.51485329a30.54419945 30.54419945 0 0 1 28.99765729 28.61102143 30.48896537 30.48896537 0 0 1-28.94242323 32.03550752h-528.53063429l63.96054694-60.64652895z m-368.02169617 179.67500704a30.26803041 30.26803041 0 0 0 0 60.59129617h841.59486483a30.26803041 30.26803041 0 1 0 0-60.59129617H100.39896747z"></path></svg>
                              </use>
                            </svg>
                        </div>
                       </div>
                       <div className="right">
                         <a href="">View all</a>
                       </div>
                    </div>

                    <div className="notification">
                        {listNoti}
                    </div>
                  </div>
                </li>
                
              </ul>
            </li>
          </ul>

          {/* Download */}
          <ul className="menu-items user-download">
            <li>
              <a href="#">
                Download
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="download-icon"
                  fill="currentColor"
                >
                  <use xlinkHref="#icon-h-download">
                    <svg id="icon-h-download" viewBox="0 0 1024 1024">
                      <path d="M695.466667 209.066667v618.666666H294.4V209.066667h401.066667zM776.533333 128H213.333333v780.8h567.466667V128h-4.266667z"></path>
                      <path d="M648.533333 499.2l-153.6 149.333333L341.333333 499.2l55.466667-55.466667 59.733333 76.8V290.133333h76.8v230.4l59.733334-76.8 55.466666 55.466667zM400.682667 687.317333v76.8h192v-76.8h-192z"></path>
                    </svg>
                  </use>
                </svg> */}
              </a>
              <ul className="sub-menu">
                <li>
                  <div className="box-download">
                    <img src={qrcodebinance} alt=""/>
                    <p>Scan to Download App IOS & Android</p>
                    <a href="#" className="more-download">
                      <button>More Download Options</button>
                      </a>
                  </div>
                </li>
              </ul>
            </li>
          </ul>

          {/* Language */}
          <ul className="menu-items user-languages">
            <li>
              <a href="#">
                English <span></span> USD
              </a>
            </li>
          </ul>
        </header>
      </div>
    </Fragment>
  );
}

export default Header;
