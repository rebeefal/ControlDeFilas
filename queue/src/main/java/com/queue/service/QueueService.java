package com.queue.service;

import com.queue.entity.BranchDepartment;
import com.queue.entity.Queue;

import java.util.Collection;

public interface QueueService {
    
    Queue getById(int branchDepartmentId);

    Collection<Queue> findQueuesByBd_Id(String branchDepartmentId);
    boolean popClient(String branchDepartmentId);
    boolean deleteById(int id);

    Collection<Queue> findAll();

    Collection<Queue> findQueuesByBranchId(int branchId);
    boolean deleteAll();
    boolean save(Queue queue);

    boolean updateWindow(String window,int id);

    Queue nextClient(int branchId, int departmentId, String window);
    Queue nextClient(int branchId, int departmentId, String window,int clientNumber);



}
