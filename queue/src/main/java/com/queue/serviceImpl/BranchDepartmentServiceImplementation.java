package com.queue.serviceImpl;

import com.queue.entity.BranchDepartment;
import com.queue.entity.Queue;
import com.queue.repository.BranchDepartmentRepository;
import com.queue.service.BranchDepartmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;

@Service
public class BranchDepartmentServiceImplementation implements BranchDepartmentService {
    @Autowired
    BranchDepartmentRepository branchDepartmentRepository;

    @Override
    public BranchDepartment getById(int branchId) {
        System.out.print("Entro en branchDepartmentId get By Id  " + branchId);

        branchDepartmentRepository.findAll();
        BranchDepartment bd = branchDepartmentRepository.findById(branchId).orElse(null);
        return bd;
    }

    @Override
    public Collection<BranchDepartment> findDepartmentsByBranchId(int branchId) {
        Collection<BranchDepartment> bds;
        bds = branchDepartmentRepository.findDepartmentsByBranchId(branchId);
        return bds;
    }

    public Collection<BranchDepartment> findAll() {
        Collection<BranchDepartment> bds = branchDepartmentRepository.findAll();
        return bds;
    }

    @Override
    public boolean save(BranchDepartment branchDepartment) {
        boolean exists=false;
        for (BranchDepartment bd: this.findAll()) {
            if(bd.getBranchDepartmentId().equals(branchDepartment.getBranchDepartmentId())){
                exists=true;
            }
        }
        if(exists==false){
            branchDepartmentRepository.save(branchDepartment);
        }
        return exists;
    }

    @Override
    public boolean deleteAll() {
        branchDepartmentRepository.deleteAll();
        return true;
    }

/*    @Override
    public boolean deleteByBranchDepartmentId(String branchDepartmentId) {
        BranchDepartment bd=getById(branchDepartmentId);

        deleteByBranchDepartmentId.deleteById(bd.getId());
        return true;
    }*/

}
