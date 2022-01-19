<template>
  <div id="dashboard">
    <div class="container">
      <div class="row head-top">
        <div class="col-md-6 head-top-left">
          <img src="../assets/imgs/img1.png">
          <img src="../assets/imgs/folder.png">
          <span>Projects</span>
        </div>
        <div class="col-md-6 ">
          <div class="logout-group">
            <div class="bell">
              <img src="../assets/imgs/bell.png">
            </div>
            <div class="customer">
              <img src="../assets/imgs/customer.png">
            </div>

           <label class="dropdown">
              <div class="dd-button"></div>
              <input type="checkbox" class="dd-input" id="test">
              <ul class="dd-menu">
                <li>
                  <a href="Javascript:;"  @click="doLogout">logout</a>
                </li>
              </ul>
            </label>

          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-md-12">
          <h2 class="title">{{ title }}</h2>
        </div>
      </div>

      <div class="row">
        <div class="search-box right">
          <input type="text" class="search-input" placeholder="subject of reference">

          <button class="search-button">
            <i class="fas fa-search"></i>
          </button>
        </div>  
      </div>

      <div class="row">
        <div id="tab-app" class="container">
          <div class="tabs">

            <div id="tab2" class="tab">
              <ul class="nav nav-tabs">
                  <li><a href="#tab1">Employee</a></li>
                  <li><a href="#tab2" class="active">Departments</a></li>
                </ul>
                <h1>Departments</h1>
              </div>

               <div id="tab1" class="tab">
                <ul class="nav nav-tabs">
                  <li><a href="#tab1" class="active">Employee</a></li>
                  <li><a href="#tab2">Departments</a></li>
                </ul>

                <div class="dashboard-content row">
                  <div class="col-md-4 col-sm-12 dashboard-cards">
                    <div class="ticket">
                      <div class="ticket-title"><h6>Working on</h6></div>

                      <div class="ticket-body">
                        <div class="ticket-container">
                          <img src="../assets/imgs/t1.jpg">
                          <span class="testing"></span>
                          <div class="content">
                            <div class="top">
                              <span class="comment">scrum-test-2</span>
                              <span class="title">USER STORY New</span>
                            </div>
                            <div class="bottom">
                              <a href="#" class="id">#1</a>
                              <span class="name">ticket</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="ticket-body grey">
                        <div class="ticket-container">
                          <img src="../assets/imgs/t2.png">
                          <span class="testing"></span>
                          <div class="content">
                            <div class="top">
                              <span class="comment">kanban-test</span>
                              <span class="title">USER STORY</span>
                            </div>
                            <div class="bottom">
                              <a href="#" class="id">#1</a>
                              <span class="name">story</span>
                              <span class="state">Ready for test</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="ticket" style="margin-top: 175px;">
                      <div class="ticket-body">
                        <div class="ticket-container">
                          <img src="../assets/imgs/t1.jpg">
                          <span class="testing">testing</span>
                          <div class="content">
                            <div class="top">
                              <span class="comment"></span>
                              <span class="title">scrum-test</span>
                              <img class="star" src="../assets/imgs/Star.png">
                            </div>
                            <div class="bottom">
                              <a href="#" class="id"></a>
                              <span class="name"></span>
                              <span class="state"></span>
                            </div>
                          </div>
                        </div>
                        <div class="icon-list">
                          <ul>
                            <li><img src="../assets/imgs/hart.png"><span>0</span></li>
                            <li><img src="../assets/imgs/eye.png"><span>1</span></li>
                            <li><img src="../assets/imgs/users.png"><span>1</span></li>
                          </ul>
                        </div>
                      </div>
                    </div>

                  </div>

                  <div class="col-md-4 col-sm-12 dashboard-cards">
                    <div class="ticket">
                      <div class="ticket-title"><h6>Working on</h6></div>

                      <div class="ticket-body">
                        <div class="ticket-container">
                          <img src="../assets/imgs/user.jpg">
                          <span class="testing"></span>
                          <div class="content">
                            <div class="top">
                              <span class="comment">kanban-test</span>
                              <span class="title">USER STORY</span>
                            </div>
                            <div class="bottom">
                              <a href="#" class="id">#1</a>
                              <span class="name">story</span>
                              <span class="state">Ready for test</span>
                            </div>
                          </div>
                        </div>
                        <div class="description">
                          <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available</p>
                        </div>

                        <div class="buttons">
                          <button class="blue">Manage projects</button>
                          <button class="grey">Edit projects</button>
                        </div>
                      </div>
                    </div>
                    
                    <div class="ticket" style="margin-top: 35px;">
                      <div class="ticket-body">
                        <div class="ticket-container">
                          <img src="../assets/imgs/t2.png">
                          <div class="content">
                            <div class="top">
                              <span class="comment"></span>
                              <span class="title">kanban-test</span>
                              <img class="star" src="../assets/imgs/Star.png">
                            </div>
                            <div class="bottom">
                              <span class="comment">Description line here</span>
                            </div>
                          </div>
                        </div>
                        <div class="buttons">
                          <button class="grey">Edit projects</button>
                        </div>

                      </div>
                    </div>
                  </div>

                  <div class="col-md-4 col-sm-12 dashboard-cards">
                    <div class="ticket">
                      <div class="ticket-body">
                        <div class="ticket-container">
                          <img src="../assets/imgs/t1.jpg">
                          <span class="testing">blah</span>
                          <div class="content">
                            <div class="top">
                              <span class="comment"></span>
                              <span class="title">scrum-test-2</span>
                              <img class="star" src="../assets/imgs/Star.png">
                            </div>
                            <div class="bottom">
                              <a href="#" class="id"></a>
                              <span class="name"></span>
                              <span class="state"></span>
                            </div>
                          </div>
                        </div>
                        <div class="icon-list">
                          <ul>
                            <li><img src="../assets/imgs/hart.png"><span>0</span></li>
                            <li><img src="../assets/imgs/eye.png"><span>1</span></li>
                            <li><img src="../assets/imgs/users.png"><span>1</span></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
            
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
   data() {
    return {
      title:"Projects Dashboard",
      star: "../assets/imgs/t1.jpg"
    }
  },
  methods: {
    doLogout(e) {
      e.preventDefault();
      this.$router.push({ name: 'Login' })
    }
  }
}
</script>