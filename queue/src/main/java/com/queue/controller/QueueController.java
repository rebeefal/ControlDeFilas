package com.queue.controller;

import com.queue.entity.Branch;
import com.queue.entity.BranchDepartment;
import com.queue.entity.Queue;
import com.queue.service.QueueService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;



@RestController
@RequestMapping(path = "/api/queue")
public class QueueController {
    @Autowired
    QueueService queueService;

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping(path = "/{id}")
    public Queue getById(@PathVariable("id") int id) {
        return queueService.getById(id);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping(path = "/all")
    public Collection<Queue> findAll() {
        return queueService.findAll();
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping(path = "/branch/{branchDepartmentId}")
    public Collection<Queue> findQueuesByBd_Id(@PathVariable("branchDepartmentId") String branchDepartmentId) {
        return queueService.findQueuesByBd_Id(branchDepartmentId);
    }


//http://localhost:8080/api/queue/branch/department/undefined

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping(path = "/branch/department/{branchId}")
    public Collection<Queue> findQueuesByBranchId(@PathVariable("branchId") int branchId) {
        
        return queueService.findQueuesByBranchId(branchId);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @PutMapping(path = "/pop/{branchDepartmentId}")
    public boolean popClient(@PathVariable("branchDepartmentId") String branchDepartmentId) {
        return queueService.popClient(branchDepartmentId);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @DeleteMapping(path = "/delete/all")
    public boolean deleteAll() {
        return queueService.deleteAll();
    }


    @CrossOrigin(origins = "http://localhost:4200")
    @PutMapping(path = "/delete/{id}")
    public boolean deleteById(@PathVariable("id") int id) {
        return queueService.deleteById(id);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/save")
    public boolean saveQueue(@RequestBody(required = true) Queue queue) {
        return queueService.save(queue);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @PutMapping("/next-client")
    public Queue nextClient(@RequestBody(required = true) Queue queue)  {
        Queue queueTemp= new Queue();
        if(queue.getClientNumber()!=0){
            int clientNumber= queue.getClientNumber();
            queueTemp =  queueService.nextClient(queue.getBranchId(),queue.getDepartmentId(),queue.getWindow(),queue.getClientNumber());
        }else{
            queueTemp  = queueService.nextClient(queue.getBranchId(),queue.getDepartmentId(),queue.getWindow());
        }
        return queueTemp;
    }


    @CrossOrigin(origins = "http://localhost:4200")
    @PutMapping("/window/add")
    public boolean updateWindow(@RequestBody(required = true) Queue queue) {
        
        return queueService.updateWindow(queue.getWindow(), queue.getId());
    }
}
