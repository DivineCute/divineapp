<template>
  <header id="header" style="padding-right: 150px; padding-left: 130px">
    <div class="container">

      <h1><a href="index.html">Divine Yabo</a></h1>
      <h2>I am a not so good developer who's trying the best!</h2>

      <nav id="navbar" class="navbar">
        <ul>
          <li><a class="nav-link active" href="#header">Home</a></li>
          <li><a class="nav-link" href="#about">About</a></li>
          <li><a class="nav-link" href="#contact">Contact</a></li>
          <li><a class="nav-link" href="#application">Application</a></li>
        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav>

      <div class="social-links">
        <a href="https://www.facebook.com/divine.yabo.3" class="facebook"><i class="bi bi-facebook"></i></a>
        <a href="https://www.instagram.com/baynyabo/" class="instagram"><i class="bi bi-instagram"></i></a>
      </div>

    </div>
    <img src="assets/img/divine.png" class="img-fluid rounded" alt="">
  </header>

  <div id="about">
    <div class="about-me container">
      <div class="section-title">
        <h2>About</h2>
        <p>Learn more about me</p>
      </div>
      <div class="row">
        <div class="col-lg-4" data-aos="fade-right">
          <img src="assets/img/me.jpg" class="img-fluid rounded w-100" alt="">
        </div>
        <div class="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
          <h3>Web Developer</h3>
          <p class="fst-italic">
            Transforming ideas into immersive digital experiences through code, a web developer crafts the
            language of the future one line at a time.
          </p>
          <div class="row">
            <div class="col-lg-6">
              <ul>
                <li><i class="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>December 25
                    2002</span></li>
                <li><i class="bi bi-chevron-right"></i> <strong>Cell Number:</strong>
                  <span>09702243752</span>
                </li>
                <li><i class="bi bi-chevron-right"></i> <strong>City:</strong> <span>Cebu City</span></li>
              </ul>
            </div>
            <div class="col-lg-6">
              <ul>
                <li><i class="bi bi-chevron-right"></i> <strong>Age:</strong> <span>20</span></li>
                <li><i class="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Information
                    Technology Master</span></li>
                <li><i class="bi bi-chevron-right"></i> <strong>Gmail:</strong>
                  <span>divineyabo21@gmail.com</span>
                </li>
              </ul>
            </div>
          </div>
          <p>
            As a versatile and curious individual, I thrive on continuous learning and creative expression,
            seeking to make a positive impact through the power of words and technology..
            With a positive attitude as my compass, I navigate challenges with resilience, embrace opportunities
            for growth, and inspire those around me with optimism and kindness.
          </p>
        </div>
      </div>

    </div><!-- End About Me -->

  </div>

  <div id="contact" class="contact mt-5">
    <div class="container">

      <div class="section-title">
        <h2>Contact</h2>
        <p>Contact Me</p>
      </div>

      <div class="row mt-2">

        <div class="col-md-6 d-flex align-items-stretch">
          <div class="info-box">
            <i class="bx bx-map"></i>
            <h3>My Address</h3>
            <p>Sudtonggan Basak Lapu Lapu City</p>
          </div>
        </div>

        <div class="col-md-6 mt-4 mt-md-0 d-flex align-items-stretch">
          <div class="info-box">
            <i class="bx bx-share-alt"></i>
            <h3>Social Profiles</h3>
            <div class="social-links">
              <a href="https://www.facebook.com/divine.yabo.3" class="facebook"><i class="bi bi-facebook"></i></a>
              <a href="https://www.instagram.com/baynyabo/" class="instagram"><i class="bi bi-instagram"></i></a>
            </div>
          </div>
        </div>

        <div class="col-md-6 mt-4 d-flex align-items-stretch">
          <div class="info-box">
            <i class="bx bx-envelope"></i>
            <h3>Email Me</h3>
            <p>divineyabo21@gmail.com </p>
          </div>
        </div>
        <div class="col-md-6 mt-4 d-flex align-items-stretch">
          <div class="info-box">
            <i class="bx bx-phone-call"></i>
            <h3>Call Me</h3>
            <p>09702243752</p>
          </div>
        </div>
      </div>

      <form action="forms/contact.php" method="post" role="form" class="php-email-form mt-4">
        <div class="row">
          <div class="col-md-6 form-group">
            <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" required>
          </div>
          <div class="col-md-6 form-group mt-3 mt-md-0">
            <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" required>
          </div>
        </div>
        <div class="form-group mt-3">
          <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" required>
        </div>
        <div class="form-group mt-3">
          <textarea class="form-control" name="message" rows="5" placeholder="Message" required></textarea>
        </div>
        <div class="my-3">
          <div class="loading">Loading</div>
          <div class="error-message"></div>
          <div class="sent-message">Your message has been sent. Thank you!</div>
        </div>
        <div class="text-center"><button type="submit">Send Message</button></div>
      </form>

    </div>
  </div>

  <div id="application" class="contact my-5">
    <div class="container">
      <div class="row">

        <div class="section-title mt-5">
          <h2>Application</h2>
          <p>Do it a minute</p>
        </div>
        <div class="col-8">

          <div class="php-email-form">
            <div class="section-title" style="overflow-y: auto; height: 190px;">
              <table class="table rounded">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Task To Do</th>
                    <th scope="col">Status</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-if="todos.length <= 0">
                    <th scope="row">1</th>
                    <td>No Data</td>
                    <td><span class="rounded bg-danger px-2">No Data</span></td>
                    <td>
                      <button class="btn btn-sm btn-primary me-4" disabled>
                        <i class="bi bi-arrow-clockwise"></i> Mark As Done
                      </button>
                      <button class="btn btn-sm btn-danger" disabled>
                        <i class="bi bi-trash"></i> Remove
                      </button>
                    </td>
                  </tr>
                  <tr v-else v-for="(t, index) of todos" :key="index">
                    <th scope="row">{{ index + 1 }}</th>
                    <td>{{ t.task }}</td>
                    <td>
                      <span :class="{ 'rounded': true, 'bg-primary': t.status, 'bg-danger': !t.status, 'px-2': true }">
                        {{ t.status ? 'Done' : 'Not yet' }}
                      </span>
                    </td>
                    <td>
                      <button class="btn btn-sm btn-primary me-4" @click="updateTask(t.id, t.status)">
                        <i class="bi bi-arrow-clockwise"></i> Mark As {{ t.status ? 'Not yet' : 'Done' }}
                      </button>
                      <button class="btn btn-sm btn-danger" @click="removeTask(t.id)">
                        <i class="bi bi-trash"></i> Remove
                      </button>
                    </td>
                  </tr>

                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="col-4">
          <div class="php-email-form">
            <div class="form-group my-1">
              <textarea class="form-control" v-model="task" rows="3" placeholder="Message" required></textarea>
            </div>
            <div class="text-center mb-3">
              <button type="submit" class="btn btn-sm" :disabled="!isTaskTooShort" @click="addTask">Send Task</button>
            </div>
            <small><span class="text-danger">Note: </span>You cannot send task if text is below 9 and above 25</small>
          </div>
        </div>

      </div>
    </div>
  </div>

  <div class="credits">
    Designed by <span class="text-primary">Divine Yabo</span>
  </div>
</template>

<script setup>

import { ref, onMounted, computed } from 'vue'
import { db } from './firebase'
import { collection, query, onSnapshot, addDoc, doc, deleteDoc, updateDoc } from "firebase/firestore";

const task = ref('')
const todos = ref([])

const addTask = async (e) => {
  e.preventDefault();
  try {
    await addDoc(collection(db, "tasks"), {
      task: task.value,
      status: false,
    });
    task.value = ''
  } catch (e) {
    console.log(e);
  }
}

const removeTask = (id) => {
  if (confirm('Are you sure want to remove this task?')) {
    const fsquery = doc(db, 'tasks', id);
    deleteDoc(fsquery)
      .then(() => {
        console.log('Document successfully deleted.');
      })
      .catch((error) => {
        console.error('Error deleting document:', error);
      });
  }

}

const updateTask = (id, sta) => {
  if (confirm('Are you sure want to update this task?')) {
    const fsquery = doc(db, 'tasks', id);
    const newData = {
      status: sta ? false : true
    }
    updateDoc(fsquery, newData)
      .then(() => {
        console.log('Mark As Done.');
      })
      .catch((error) => {
        console.error('Error Updating document:', error);
      });
  }

}

const isTaskTooShort = computed(() => {
  const taskLength = task.value.length;
  return taskLength >= 10 && taskLength <= 25;
});

const getRealTimeData = () => {
  const q = query(collection(db, "tasks"));
  onSnapshot(q, (querySnapshot) => {
    const newTask = [];
    querySnapshot.forEach((doc) => {
      const todo = {
        id: doc.id,
        task: doc.data().task,
        status: doc.data().status
      }
      newTask.push(todo);
    });
    todos.value = newTask;
  });
}

onMounted(() => {
  getRealTimeData();
})



</script>