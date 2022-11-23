package com.queue;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@EntityScan("com.queue.entity")
@EnableJpaRepositories(basePackages = "com.queue.repository")
/*
 * @PropertySources({
 * 
 * @PropertySource({
 * "file:C:\\Users\\rebee\\OneDrive\\Documents\\GitHub\\TFG\\control-filas\\src\\main\\resources\\department.properties"
 * })
 * })
 */
@SpringBootApplication
public class QueueApplication {

	public static void main(String[] args) {SpringApplication.run(QueueApplication.class, args);
	}

}
