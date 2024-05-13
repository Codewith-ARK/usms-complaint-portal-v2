import axios from "axios";
import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090')

export async function createComplaint(data){
  const records = await pb.collection('complaints').create(data);
  return records;
}

export async function fetchAllComplaints(){
  try {
    const records = await pb.collection('complaints').getFullList({
      // sort: '-created'
    });
    return records;
  } catch (error) {
    console.log(error);
  }
}