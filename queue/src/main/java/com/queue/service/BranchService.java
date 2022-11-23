package com.queue.service;



import com.queue.entity.Branch;

import java.util.Collection;

public interface BranchService {
    //Branch getById(int branchId);
    Branch getById(int id);

    Collection<Branch> findAll();

    boolean save(Branch branch);
    boolean deleteAll();
    boolean deleteById(int id);

}
