package com.queue.serviceImpl;

import com.queue.entity.BranchDepartment;
import com.queue.entity.Queue;
import com.queue.repository.QueueRepository;
import com.queue.service.QueueService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.List;

@Service
public class QueueServiceImplementation implements QueueService {

    @Autowired
    QueueRepository queueRepository;

    @Override
    public Queue getById(int branchId) {
        System.out.print("Entro en queueId get By Id  " + branchId);
        queueRepository.findAll();
        Queue bd = queueRepository.findById(branchId).orElse(null);
        return bd;
    }

    @Override
    public Collection<Queue> findQueuesByBranchId(int branchId) {
        Collection<Queue> qs;
        qs = queueRepository.findQueuesByBranchId(branchId);
        return qs;
    }

    @Override
    public Collection<Queue> findQueuesByBd_Id(String branchDepartmentId) {
        Collection<Queue> bds;
        bds = queueRepository.findQueuesByBd_Id(branchDepartmentId);
        return bds;
    }

    public Collection<Queue> findAll() {
        Collection<Queue> qs = queueRepository.findAll();
        return qs;
      }
    @Override
    public boolean popClient(String branchDepartmentId) {
        Collection<Queue> qs;
        qs = queueRepository.findQueuesByBd_Id(branchDepartmentId);
        int t = 0;
        Queue temp = (Queue) qs.toArray()[0];
        t = temp.getClientNumber();
        for (Queue client : qs) {
            if (client.getClientNumber() < t) {
                t = client.getClientNumber();
                temp = client;
            }
        }
        queueRepository.deleteById(temp.getId());
        return true;
    }

    @Override
    public boolean deleteById(int id) {
        Queue q=getById(id);
        queueRepository.deleteById(q.getId());
        return true;
    }
    @Override
    public boolean deleteAll() {
        queueRepository.deleteAll();
        return true;
    }
    @Override
    public boolean save(Queue queue) {
        boolean exists=false;
        for (Queue q: this.findAll()) {
            if(q.getClientNumber()==queue.getClientNumber()&&
                q.getDepartmentLetter().equals(queue.getDepartmentLetter())&&
                q.getBranchId()==queue.getBranchId()){
                exists=true;
            }
        }
        if(exists==false){
            queueRepository.save(queue);
        }
        //queueRepository.save(queue);
        return exists;
    }

    @Override
    public boolean updateWindow(String window,int id) {
        queueRepository.updateWindow(window,id);
        System.out.println("queueRepository.updateWindow(window,id)  "+window +"    "+ id);
        return true;
    }

    @Override
    public Queue nextClient(int branchId, int departmentId, String window) {
        Queue q = null;
        String branchDepartmentId = String.valueOf(branchId) + String.valueOf(departmentId);
        Collection<Queue> qs = findQueuesByBd_Id(branchDepartmentId);
        Collection<Queue> bqs = findQueuesByBranchId(branchId);  //
        List<Integer> temp = new ArrayList<>();

        for (Queue c : bqs) {
            if (c.getBranchId() == branchId
                    && c.getWindow()!=null) {
                if (c.getWindow().equals(window)) {
                    this.deleteById(c.getId());
                }
            }
        }

        for (Queue c : qs) { // changes qs with bqs
            //if(branchDepartmentId == c.getBranchDepartmentId()){ //
                temp.add(c.getClientNumber());
            //}  //
            /*if (c.getBranchId() == branchId
                    && c.getWindow()!=null) {
                if (c.getWindow().equals(window)) {
                    this.deleteById(c.getId());
                }
            }*/
            Collections.sort(temp);
            int next = temp.get(0);
            while (q == null) {
                for (Queue qc : qs) {
                    if (qc.getClientNumber() == next) {
                        if (qc.getWindow() == null) {
                            updateWindow(window, qc.getId());
                            q = qc;
                        }
                    }
                }
                next++;
            }
        }
        return q;
    }

    @Override
    public Queue nextClient(int branchId, int departmentId, String window, int clientNumber) {
        Queue q = null;
        String branchDepartmentId = String.valueOf(branchId) + String.valueOf(departmentId);
        Collection<Queue> qs = findQueuesByBd_Id(branchDepartmentId);
        for (Queue client : qs) {
            if(client.getBranchId()==branchId
                    && client.getWindow()!=null){
                if(client.getWindow().equals(window)) {
                    this.deleteById(client.getId());
                }
            }
            if (client.getClientNumber() == clientNumber) {
                updateWindow(window, client.getId());
                q=client;
            }
        }
        return q;
    }
}
