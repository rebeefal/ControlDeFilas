package com.queue.repository;


import com.queue.entity.Branch;
import com.queue.entity.BranchDepartment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Collection;

@Repository
public interface BranchRepository extends JpaRepository<Branch, Integer> {

}